import { motion, useInView } from "framer-motion";
import Image from "next/image";

import Background1 from "@/public/imagini/hero/hero1.png";
import Background2 from "@/public/imagini/hero/hero2.png";
import Background3 from "@/public/imagini/hero/hero3.png";
import Background4 from "@/public/imagini/hero/hero4.png";
import Background5 from "@/public/imagini/hero/hero5.png";
import { useRef } from "react";
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  return (
    <section
      className="h-screen  flex  relative items-center justify-center w-full bg-site md:px-24 py-8 overflow-hidden  "
      id="hero-section"
    >
      <div
        ref={ref}
        className="  right-0 z-40  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center flex flex-col gap-6"
      >
        <motion.h1
          initial={{ y: "40%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className={`text-[3vw]   text-crem  font-bold   `}
        >
          ROSE DIMAT
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 3.3 }}
          className={`text-[2vw]   text-crem  font-bold   `}
        >
          Arta creata din petalele naturii
        </motion.span>
      </div>

      <div
        className="flex relative bg-site h-[600px] gap-0 justify-center w-full rounded-l-2xl   overflow-hidden"
        id="container-imagini-hero "
      >
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute z-20  top-0 bottom-0 left-0 right-0  bg-black"
        />
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="overflow-hidden w-1/5 m-0 "
        >
          <Image
            alt="background"
            className=" absolute z-10 w-full"
            src={Background1}
            placeholder="blur"
          />
        </motion.div>{" "}
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.7, delay: 0.8 }}
          className="overflow-hidden w-1/5 m-0"
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
          transition={{ duration: 1.4, delay: 1.1 }}
          className="overflow-hidden w-1/5"
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
          transition={{ duration: 1.1, delay: 1.4 }}
          className="overflow-hidden w-1/5"
        >
          <Image
            alt="background"
            className=" relative z-10 w-full "
            src={Background4}
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="overflow-hidden w-1/5"
        >
          <Image
            alt="background"
            className=" relative z-10 w-full "
            src={Background5}
            placeholder="blur"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
