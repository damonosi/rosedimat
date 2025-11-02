"use client";
import useScrollDirection from "@/hooks/useScrollDirection";
import Cart from "@/public/imagini/cart.svg";

import Logo from "@/public/imagini/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Produse" },
  { href: "/", label: "Despre noi" },
  { href: "/", label: "Contact" },
];

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
  <Link href="/" id="container-logo" className="relative z-30">
    <Logo
      className={`w-12 h-12 hover:scale-110 transform-gpu transition duration-500 hover:rotate-[360deg] ${
        scrollDirection === "down" && "rotate-[360deg]"
      } `}
    />
  </Link>
);

const MenuToggle = ({
  setOpenMenu,
  opened,
}: {
  setOpenMenu: (value: boolean) => void;
  opened: boolean;
}) => {
  return (
    <motion.button
      aria-expanded={opened}
      aria-controls="mobile-navigation"
      onClick={() => setOpenMenu(!opened)}
      className="relative z-30 flex h-12 w-12 items-center justify-center rounded-full border border-roz/40 bg-roz/10 text-roz shadow-sm transition-colors hover:bg-roz/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-roz/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site"
      whileTap={{ scale: 0.94 }}
    >
      <span className="sr-only">{opened ? "Închide meniul" : "Deschide meniul"}</span>
      <motion.span
        animate={{ rotate: opened ? 360 : 0, scale: opened ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
        className="flex h-9 w-9 items-center justify-center"
      >
        <Logo
          className="h-full w-full text-roz"
          aria-hidden="true"
        />
      </motion.span>
    </motion.button>
  );
};

const Navigation = ({
  scrollDirection,
  variant = "desktop",
}: {
  scrollDirection?: string;
  variant?: "desktop" | "mobile";
}) => {
  const isDesktop = variant === "desktop";
  const baseClasses = isDesktop
    ? "z-30 flex w-full items-center justify-center gap-6 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 md:w-1/2"
    : "flex w-full flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em]";
  const textClasses = isDesktop
    ? scrollDirection === "down"
      ? "text-[#3f1f24]/80"
      : "text-[#3f1f24]"
    : "text-[#3f1f24]";
  const linkClasses = isDesktop
    ? "relative py-2 transition-colors hover:text-roz"
    : "relative w-full rounded-full border border-transparent bg-white/70 px-6 py-3 text-center tracking-[0.35em] text-[#3f1f24]/90 shadow-sm transition hover:border-roz/40 hover:bg-white hover:text-roz";

  return (
    <nav className={`${baseClasses} ${textClasses}`} id={isDesktop ? undefined : "mobile-navigation"}>
      {NAV_ITEMS.map((item) => (
        <Link key={item.label} href={item.href} className={linkClasses}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

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
      <section className="hidden h-[72px] w-full items-center justify-between px-10 md:flex lg:px-24" id="desktop">
        <div className="flex items-center gap-6">
          <LogoLink scrollDirection={scrollDirection} />
          <div className="flex flex-col text-xs font-medium tracking-widest text-[#3f1f24]">
            <span className="uppercase">Rose Dimat</span>
            <span className="text-[11px] uppercase">Esențe artizanale din România</span>
          </div>
        </div>

        <Navigation scrollDirection={scrollDirection} />

        <div className="relative flex h-full items-center justify-center" id="cart">
          <button className="z-30 flex h-11 w-11 items-center justify-center rounded-full border border-roz/40 bg-roz/10 text-roz backdrop-blur transition hover:scale-105 hover:bg-roz/20">
            <Cart alt="cart" className="h-5 w-5" />
          </button>
          <PatratRoz scrollDirection={scrollDirection} />
        </div>
      </section>
      <section
        id="mobile"
        className="relative flex h-[72px] w-full flex-col items-center justify-center gap-1 border-b border-roz/10 bg-gradient-to-r from-site via-site/95 to-crem/80 px-4 py-2 text-[#3f1f24] shadow-lg md:hidden"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col text-xs font-semibold uppercase tracking-[0.2em]">
            <span>Rose Dimat</span>
            <span className="text-[10px] font-normal tracking-widest text-[#3f1f24]/80">
              Trandafiri din Județul Bacău · 100ml
            </span>
          </div>
          <MenuToggle opened={opened} setOpenMenu={setOpenMenu} />
        </div>
        <AnimatePresence>
          {opened && (
            <>
              <motion.div
                key="mobileOverlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.95 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 top-full bottom-0 z-20 bg-[#3f1f24]/70 backdrop-blur"
                onClick={() => setOpenMenu(false)}
              />
              <motion.div
                key="meniuMobile"
                initial={{ y: "-20%", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="absolute left-4 right-4 top-[calc(100%+0.75rem)] z-30 flex flex-col items-center gap-5 rounded-3xl border border-roz/20 bg-gradient-to-br from-site via-site to-crem px-6 pb-6 pt-7 text-[#3f1f24] shadow-2xl"
              >
                <motion.hr
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="h-1 w-full rounded-full bg-roz"
                />
                <Navigation variant="mobile" />
                <div className="flex flex-col items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-roz/80">
                  <p className="text-center text-[#3f1f24]/70">
                    Prețurile sunt calculate pentru 100ml de esență
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-roz/40 bg-roz/10 px-6 py-2 text-[11px] font-semibold tracking-[0.35em] text-roz transition hover:bg-roz/20"
                    onClick={() => setOpenMenu(false)}
                  >
                    Scrie-ne
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
};

export default Header;
