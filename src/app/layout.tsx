import { Providers } from "@/utils/providers";
import { Hahmlet } from "next/font/google";

import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

const hahmlet = Hahmlet({ subsets: ["latin"] });

export const metadata = {
  title: "Casa Damaskin",
  description: "Magazin dedicat esențelor de trandafiri de Damasc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="overflow-x-hidden "
      lang="en"
    >
      <body className={`${hahmlet.className} overflow-x-hidden`}>
        <Providers>
          <main className="flex relative flex-col bg-site text-roz  ">
            {" "}
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
