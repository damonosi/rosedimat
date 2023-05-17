import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import Frunze from "@/public/imagini/frunze.png";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [600, 900], [100, 200]);
  const y2 = useTransform(scrollY, [600, 900], [100, -300]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  const cardText =
    "flex flex-col justify-center absolute items-center rounded bg-white w-full  max-w-[20rem]  h-fit";
  console.log(entry);

  return (
    <div
      className="min-h-screen flex relative  w-full gap-5 "
      id="hero-section"
    >
      <section className="flex flex-col relative w-1/2 max-h-screen">
        <motion.div
          animate={{ scale: 1.3, x: 100 }}
          transition={{ duration: 8, delay: 1 }}
          className="flex flex-col justify-center items-center "
        >
          <motion.span className="text-[11rem] font-bold">
            ROSE DIMAT
          </motion.span>
        </motion.div>
      </section>
      <section className="flex w-1/2  justify-between items-center relative">
        <div
          id="container-imagini"
          className="flex gap-2"
        >
          <motion.div
            animate={{ rotate: -10 }}
            className="relative"
            id="container-imagine"
          >
            {" "}
            <Image
              alt="frunze"
              src={Frunze}
            />
          </motion.div>
          <motion.div
            animate={{ y: -70 }}
            className="relative"
            id="container-imagine"
          >
            {" "}
            <Image
              alt="frunze"
              src={Frunze}
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 10 }}
            className="relative"
            id="container-imagine"
          >
            {" "}
            <Image
              alt="frunze"
              src={Frunze}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
