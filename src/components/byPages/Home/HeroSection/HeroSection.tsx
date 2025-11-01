import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Background1 from "@/public/imagini/hero/hero1.png";
import Background2 from "@/public/imagini/hero/hero2.png";
import Background3 from "@/public/imagini/hero/hero3.png";
import Background4 from "@/public/imagini/hero/hero4.png";
import Background5 from "@/public/imagini/hero/hero5.png";

const heroImages = [
  { src: Background1, delay: 0.2 },
  { src: Background2, delay: 0.35 },
  { src: Background3, delay: 0.5 },
  { src: Background4, delay: 0.65 },
  { src: Background5, delay: 0.8 },
];

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative isolate flex w-full justify-center overflow-hidden bg-site"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-[-20%] w-[65%] rounded-full bg-roz/10 blur-3xl md:right-[-10%]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-64 w-64 rounded-full bg-verde/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f6f3db] to-transparent" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse gap-16 px-4 pb-16 pt-24 sm:px-6 lg:flex-row lg:items-center lg:gap-24 lg:px-8 lg:pb-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-roz/30 bg-white/60 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-roz backdrop-blur"
          >
            Esența trandafirilor de Damasc
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-[#3f1f24] sm:text-5xl lg:text-6xl"
          >
            ROSE DIMAT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4d2a2e] sm:text-xl"
          >
            Creăm experiențe sensoriale premium cu fiecare petală culeasă manual.
            Descoperă colecția noastră artizanală de produse naturale, inspirate de
            rafinamentul grădinilor orientale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="#produse"
              className="inline-flex items-center justify-center rounded-full bg-roz px-8 py-3 text-base font-semibold text-crem shadow-lg shadow-roz/20 transition hover:bg-[#c05c55]"
            >
              Descoperă colecția
            </Link>
            <a
              href="#despre-noi"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c9aa] px-8 py-3 text-base font-semibold text-[#3f1f24] transition hover:border-roz hover:text-roz"
            >
              Povestea noastră
            </a>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 grid w-full gap-4 text-left sm:grid-cols-2"
          >
            {[
              "Culegere manuală la răsărit",
              "Ingrediente 100% naturale",
              "Producție locală de familie",
              "Ambalaje reciclabile premium",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 text-sm text-[#4d2a2e] shadow-sm shadow-roz/10 backdrop-blur"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-roz" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex w-full justify-center"
        >
          <div className="grid w-full max-w-lg grid-cols-2 gap-4 sm:max-w-xl sm:grid-cols-3 lg:max-w-none">
            {heroImages.map(({ src, delay }, index) => (
              <motion.div
                key={src.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-3xl bg-white/60 shadow-lg shadow-roz/20 ring-1 ring-roz/10 ${
                  index === 0
                    ? "col-span-2 aspect-[3/2] sm:col-span-2"
                    : index === 4
                    ? "col-span-2 aspect-[3/2] sm:col-span-1 sm:row-span-2"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt="Colaj produse Rose Dimat"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 40vw, 80vw"
                  priority={index === 2}
                  placeholder="blur"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
