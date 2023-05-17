import { Providers } from "@/utils/providers";
import { Inter, Poppins } from "next/font/google";

import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const inter = Inter({ subsets: ["latin"] });

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
      <body className={poppins.className}>
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
