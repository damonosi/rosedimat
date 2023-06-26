import { motion, useInView } from "framer-motion";
import Image from "next/image";

import Background from "@/public/imagini/coverHero3.jpg";
import { useRef } from "react";
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="min-h-screen flex  relative w-full  "
      id="hero-section"
    >
      <div
        ref={ref}
        className="  right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center flex flex-col gap-6"
      >
        <motion.h1
          className={`text-6xl   text-crem  font-bold transition ease-in-out delay-300 duration-[2500ms] ${
            isInView ? "opacity-100 " : "opacity-50 -translate-x-40"
          } `}
        >
          ROSE DIMAT
        </motion.h1>
        <motion.span
          className={`text-3xl   text-crem  font-bold transition ease-in-out delay-300 duration-[2000ms] ${
            isInView ? "opacity-100 " : "opacity-10 translate-x-40"
          } `}
        >
          Arta creata din petalele naturii
        </motion.span>
      </div>

      <Image
        alt="background"
        className="w-full relative z-10"
        src={Background}
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-10" />
    </section>
  );
};

export default HeroSection;
