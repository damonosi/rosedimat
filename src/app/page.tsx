"use client";
import Apa from "@/public/imagini/sticlaApa.png";
import Sticla from "@/public/imagini/uleiProfil.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

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
    <section className="flex mt-24  flex-col  items-center  justify-between relative ">
      <BackgroundSection culoareBackground="yellow-600">
        <div
          className="min-h-screen flex relative  w-full gap-5 "
          id="hero-section"
        >
          <motion.div className={`${cardText}  left-0 top-1/2`}>
            {" "}
            <span>
              1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ipsa! Cupiditate ex maiores nam et ea fugit accusamus velit vero?
            </span>{" "}
          </motion.div>
          <motion.div
            className={`${cardText} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            {" "}
            <span>
              {" "}
              2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ipsa! Cupiditate ex maiores nam et ea fugit accusamus velit vero?
            </span>{" "}
          </motion.div>
          <motion.div className={`${cardText} right-0`}>
            {" "}
            <span>
              {" "}
              3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ipsa! Cupiditate ex maiores nam et ea fugit accusamus velit vero?
            </span>{" "}
          </motion.div>
        </div>
      </BackgroundSection>
      <section
        className="relative h-[300vh]"
        id="animation-section"
        ref={ref}
      >
        <motion.div
          className="  mx-auto"
          style={{ y: y1, x: -50 }}
        >
          {" "}
          <Image
            alt="sticla"
            src={Apa}
          />
        </motion.div>
        <motion.div
          className=" mx-auto "
          style={{ y: y2, x: 50 }}
        >
          <Image
            alt="sticla"
            src={Sticla}
          />
        </motion.div>
      </section>
    </section>
  );
}
