"use client";
import DespreNoi from "@/components/byPages/Home/DespreNoi/DespreNoi";
import HeroSection from "@/components/byPages/Home/HeroSection/HeroSection";
import ProduseSection from "@/components/byPages/Home/Produse/ProduseSection";
import BenefitsSection from "@/components/byPages/Home/Sections/BenefitsSection";
import FAQSection from "@/components/byPages/Home/Sections/FAQSection";
import RitualSection from "@/components/byPages/Home/Sections/RitualSection";
import TestimonialsSection from "@/components/byPages/Home/Sections/TestimonialsSection";
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
    <section className="flex flex-col items-center gap-24 pt-[60px]">
      <HeroSection />
      <ProduseSection />
      <BenefitsSection />
      <RitualSection />
      <TestimonialsSection />
      <FAQSection />
      <DespreNoi />
    </section>
  );
}
