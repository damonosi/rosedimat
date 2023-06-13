"use client";
import DespreNoi from "@/components/byPages/Home/DespreNoi/DespreNoi";
import HeroSection from "@/components/byPages/Home/HeroSection/HeroSection";
import ProduseSection from "@/components/byPages/Home/Produse/ProduseSection";
import { ReactNode } from "react";

const BackgroundSection = ({
  children,
  culoareBackground,
}: {
  children: ReactNode;
  culoareBackground: string;
}) => (
  <section className={`flex w-full  bg- ${culoareBackground} `}>
    {children}
  </section>
);

export default function Home() {
  return (
    <section className="flex mt-[60px]  flex-col  items-center  justify-between relative ">
      <HeroSection /> <ProduseSection /> <DespreNoi />
    </section>
  );
}
