import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import Apa from "@/public/imagini/Apa.jpg";

const ApaDeTrandafiri = () => {
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
      {" "}
      <section className="flex w-1/2 relative">
        <div
          id="container-imagini"
          className="flex gap-2"
        >
          <div id="container-imagine">
            {" "}
            <Image
              alt="apa"
              src={Apa}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col relative w-1/2 overflow-y-hidden  max-h-screen">
        <motion.div
          animate={{
            y: -500,
          }}
          transition={{ duration: 6, delay: 2 }}
          className="flex flex-col"
        >
          <motion.span className="text-[8rem] overflow-x-visible">
            INGRIJIREA PIELII DELICATE GARANTAT
          </motion.span>
        </motion.div>
      </section>
    </div>
  );
};

export default ApaDeTrandafiri;
