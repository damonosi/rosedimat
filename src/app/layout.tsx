import { Providers } from "@/utils/providers";
import { Inter } from "next/font/google";

import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rose Dimat",
  description: "Magazin trandafiri de damasc",
};




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex relative flex-col ">
            <Header />
            {children}

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
