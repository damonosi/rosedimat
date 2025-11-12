import ProfileForm from "@/components/profile/ProfileForm";
import User from "@/models/User";
import db from "@/utils/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect(`/login?callbackUrl=/profile`);
  }

  await db.connect();
  let user;
  try {
    user = await User.findById(session.user.id).lean();
  } finally {
    await db.disconnect();
  }

  if (!user) {
    redirect("/login");
  }

  const serializedUser = {
    name: user.name,
    email: user.email,
    image: user.image ?? "",
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-site px-4 py-24 text-[#3f1f24]">
      <div className="w-full max-w-3xl rounded-3xl bg-white/80 p-10 shadow-xl shadow-roz/10 backdrop-blur">
        <h1 className="text-3xl font-semibold text-center">Profilul meu</h1>
        <p className="mt-2 text-center text-sm text-[#4d2a2e]/80">
          Actualizează-ți datele personale și personalizează-ți experiența în Casa Damaskin.
        </p>
        <div className="mt-10">
          <ProfileForm user={serializedUser} />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
