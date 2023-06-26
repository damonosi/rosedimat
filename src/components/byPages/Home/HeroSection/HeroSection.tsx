import { motion, useInView } from "framer-motion";
import Image from "next/image";

import Background1 from "@/public/imagini/hero/hero1.png";
import Background2 from "@/public/imagini/hero/hero2.png";
import Background3 from "@/public/imagini/hero/hero3.png";
import Background4 from "@/public/imagini/hero/hero4.png";
import { useRef } from "react";
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="  flex  relative items-center justify-center w-full bg-site md:px-24 py-8  "
      id="hero-section"
    >
      <div
        ref={ref}
        className="  right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center flex flex-col gap-6"
      >
        <motion.h1
          initial={{ x: "40%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className={`text-[3vw]   text-crem  font-bold   `}
        >
          ROSE DIMAT
        </motion.h1>
        <motion.span
          initial={{ x: "-40%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className={`text-[2vw]   text-crem  font-bold  `}
        >
          Arta creata din petalele naturii
        </motion.span>
      </div>

      <div
        className="flex relative bg-site h-[600px] justify-center w-full rounded-l-2xl   overflow-hidden"
        id="container-imagini-hero "
      >
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="overflow-hidden w-1/4 "
        >
          <Image
            alt="background"
            className=" absolute z-10 w-full "
            src={Background1}
            placeholder="blur"
          />
        </motion.div>{" "}
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="overflow-hidden w-1/4"
        >
          <Image
            alt="background"
            className=" absolute z-10 w-full"
            src={Background2}
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="overflow-hidden w-1/4"
        >
          <Image
            alt="background"
            className=" relative z-10 w-full"
            src={Background3}
            placeholder="blur"
          />
        </motion.div>{" "}
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="overflow-hidden w-1/4"
        >
          <Image
            alt="background"
            className=" relative z-10 w-full "
            src={Background4}
            placeholder="blur"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
