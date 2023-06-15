import { Providers } from "@/utils/providers";
import { Hahmlet } from "next/font/google";

import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

const hahmlet = Hahmlet({ subsets: ["latin"] });

export const metadata = {
  title: "Rose Dimat",
  description: "Magazin trandafiri de damasc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hahmlet.className}>
        <Providers>
          <main className="flex relative flex-col bg-site text-roz">
            <Header />
            {children}

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
