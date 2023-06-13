import ApaTrandafiri from "@/public/imagini/apa.png";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

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
    <section
      className=" flex relative  w-full gap-5 "
      id="apa-trandafiri"
    >
      <div className="w-1/2">
        {" "}
        <Image
          alt="banner-stanga"
          className="relative"
          src={ApaTrandafiri}
        />
      </div>
      <div className="w-1/2">
        {" "}
        <h1>Apa de trandafir</h1>
        <h2>Transforma-ti rutina intr-o experienta florala</h2>
        <span className="text-bold">
          100 % apa din petale de trandafiri de damasc{" "}
        </span>
        <section className="flex ">
          <div id="cantitate+pret">
            <span>25 Ron </span>
            <span>/ </span>
            <span>100 ml </span>
          </div>
          <div
            id="selecteaza cantitate"
            className="flex "
          >
            <button>- </button>
            <span>cantitate </span>
            <button>+ </button>
          </div>
        </section>
        <button className="bg-roz">Comanda</button>
      </div>
    </section>
  );
};

export default ApaDeTrandafiri;
