"use client";
import useScrollDirection from "@/hooks/useScrollDirection";
import Cart from "@/public/imagini/cart.svg";

import Logo from "@/public/imagini/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const PatratRoz = ({ scrollDirection }: { scrollDirection: string }) => {
  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 405 60"
        fill="none"
        animate={{ width: scrollDirection === "down" ? "100%" : "38%" }}
        transition={{ ease: "easeOut", duration: 1.6 }}
        className="absolute top-0 right-0 bottom-0 h-[60px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="0.85"
          d="M1920 60H-2.90302e-06L147.162 0H1920V60Z"
          className="h-[60px]"
          fill="#D3736D"
        />
      </motion.svg>
    </AnimatePresence>
  );
};
const LogoLink = ({ scrollDirection }: { scrollDirection: string }) => (
  <Link
    href="/"
    id="container-logo"
    className="relative z-30"
  >
    <Logo
      className={`w-12 h-12 hover:scale-110 transform-gpu transition duration-500 hover:rotate-[360deg] ${
        scrollDirection === "down" && "rotate-[360deg]"
      } `}
    />
  </Link>
);
const LogoMenu = ({
  setOpenMenu,
  opened,
}: {
  setOpenMenu: (arg0: boolean) => void;
  opened: boolean;
}) => {
  return (
    <button
      id="container-logo"
      className="relative z-30"
      onClick={() => setOpenMenu(!opened)}
    >
      <Logo
        className={`w-12 h-12 hover:scale-110 transform-gpu transition duration-500 hover:rotate-[360deg] 
       `}
      />
    </button>
  );
};

const Navigation = ({ scrollDirection }: { scrollDirection?: string }) => (
  <nav
    className={`z-30 flex w-full items-center justify-center gap-6 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 md:w-1/2 ${
      scrollDirection === "down" ? "text-site" : "text-white"
    }`}
  >
    <Link href="/" className="relative py-2 hover:text-roz">
      Produse
    </Link>
    <Link href="/" className="relative py-2 hover:text-roz">
      Despre noi
    </Link>
    <Link href="/" className="relative py-2 hover:text-roz">
      Contact
    </Link>
  </nav>
);

const InfoBanner = () => (
  <div className="hidden w-full items-center justify-center bg-roz/20 py-1 text-xs font-semibold tracking-widest text-roz md:flex">
    <span className="mr-2 text-[11px] uppercase">Trandafiri din Județul Bacău</span>
    <span className="h-1 w-1 rounded-full bg-roz/60" />
    <span className="ml-2 text-[11px] uppercase">Preț afișat pentru 100ml</span>
  </div>
);

const Header = () => {
  const { data: session, status } = useSession();
  const [opened, setOpenMenu] = useState(false);

  let scrollDirection = useScrollDirection();

  return (
    <header className="fixed top-0 z-50 w-screen bg-gradient-to-r from-site via-site/95 to-site/90 shadow-lg">
      <InfoBanner />
      <section
        className="hidden h-[72px] w-full items-center justify-between px-10 md:flex lg:px-24"
        id="desktop"
      >
        <div className="flex items-center gap-6">
          <LogoLink scrollDirection={scrollDirection} />
          <div className="flex flex-col text-xs font-medium tracking-widest text-white/70">
            <span className="uppercase">Rose Dimat</span>
            <span className="text-[11px] uppercase">Esențe artizanale din România</span>
          </div>
        </div>

        <Navigation scrollDirection={scrollDirection} />

        <div className="relative flex h-full items-center justify-center" id="cart">
          <button className="z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:scale-105 hover:bg-white/20">
            <Cart alt="cart" className="h-5 w-5" />
          </button>
          <PatratRoz scrollDirection={scrollDirection} />
        </div>
      </section>
      <section
        id="mobile"
        className="relative flex h-[72px] w-full flex-col items-center justify-center gap-1 bg-site/95 px-4 py-2 text-white shadow-lg md:hidden"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col text-xs font-semibold uppercase tracking-[0.2em]">
            <span>Rose Dimat</span>
            <span className="text-[10px] font-normal tracking-widest text-white/70">
              Trandafiri din Județul Bacău · 100ml
            </span>
          </div>
          <LogoMenu opened={opened} setOpenMenu={setOpenMenu} />
        </div>
        <AnimatePresence>
          {opened && (
            <motion.div
              key="meniuMobile"
              initial={{ y: "-30%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "-10%", opacity: 0 }}
              className="absolute left-0 right-0 top-full flex flex-col items-center gap-2 bg-site/95 px-6 pb-4 pt-6 text-white shadow-lg"
            >
              <motion.hr
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                transition={{ delay: 0.35 }}
                exit={{ x: "-50%", opacity: 0 }}
                className="h-1 w-full rounded-full bg-roz"
              />
              <Navigation />
              <p className="text-[11px] uppercase tracking-widest text-white/60">
                Prețurile sunt calculate pentru 100ml de esență
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
};

export default Header;
