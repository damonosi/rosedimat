"use client";
import HeroSection from "@/components/byPages/Home/HeroSection";
import ApaDeTrandafiri from "@/components/byPages/sectiunea2/ApaDeTrandafiri";
import { ReactNode } from "react";

const BackgroundSection = ({
  children,
  culoareBackground,
}: {
  children: ReactNode;
  culoareBackground: string;
}) => (
  <section className={`flex w-full px-16  bg-${culoareBackground} `}>
    {children}
  </section>
);

export default function Home() {
  return (
    <section className="flex mt-24  flex-col  items-center  justify-between relative ">
      <BackgroundSection culoareBackground="yellow-600">
        <HeroSection />{" "}
      </BackgroundSection>
      <BackgroundSection culoareBackground="green-600">
        <ApaDeTrandafiri />{" "}
      </BackgroundSection>
    </section>
  );
}
