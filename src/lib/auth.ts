import User from "@/models/User";
import db from "@/utils/db";
import { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type AuthorizedUser = {
  id: string;
  name: string;
  email: string;
  image?: string;
  isAdmin?: boolean;
};

const credentialsProvider = CredentialsProvider({
  name: "credentials",
  credentials: {
    email: { label: "Email", type: "email", placeholder: "example@example.com" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials.password) {
      return null;
    }

    await db.connect();

    try {
      const user = await User.findOne({ email: credentials.email.toLowerCase() });

      if (!user) {
        return null;
      }

      const passwordMatches = await compare(credentials.password, user.password);

      if (!passwordMatches) {
        return null;
      }

      const authorizedUser: AuthorizedUser = {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
      };

      return authorizedUser;
    } finally {
      await db.disconnect();
    }
  },
});

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [credentialsProvider],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthorizedUser;
        token.id = authUser.id;
        token.isAdmin = authUser.isAdmin ?? false;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
        session.user.isAdmin = Boolean(token.isAdmin);
      }

      return session;
    },
  },
};
