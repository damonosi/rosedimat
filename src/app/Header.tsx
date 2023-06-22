"use client";
import useScrollDirection from "@/hooks/useScrollDirection";
import Cart from "@/public/imagini/cart.svg";

import Logo from "@/public/imagini/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";

const PatratRoz = ({ scrollDirection }: { scrollDirection: string }) => {
  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 405 60"
        fill="none"
        animate={{ width: scrollDirection === "down" ? "100%" : "30%" }}
        transition={{ ease: "easeOut", duration: 2 }}
        className={`absolute h-[60px] top-0 right-0  bottom-0   `}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="0.8"
          d="M1920 60H-2.90302e-06L147.162 0H1920V60Z"
          className=" h-[60px]"
          fill="#D3736D"
        />
      </motion.svg>
    </AnimatePresence>
  );
};

const Navigation = ({ scrollDirection }: { scrollDirection: string }) => (
  <nav
    className={`z-30 flex gap-4 justify-end w-1/2 items-center ${
      scrollDirection === "down" && "text-site"
    }`}
  >
    <Link
      href="/"
      id="container-logo"
      className="relative hover:scale-110 "
    >
      Produse
    </Link>
    <Link
      href="/"
      id="container-logo"
      className="relative hover:scale-110"
    >
      Despre noi
    </Link>
    <Link
      href="/"
      id="container-logo"
      className="relative hover:scale-110"
    >
      Contact
    </Link>
  </nav>
);

const Header = () => {
  const { data: session, status } = useSession();
  let scrollDirection = useScrollDirection();
  console.log(scrollDirection);
  return (
    <header className="flex fixed bg-site w-full h-[60px] z-50    overflow-hidden ">
      <div className="flex  w-full px-2 md:px-36 items-center h-[60px] justify-between ">
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
        <Navigation scrollDirection={scrollDirection} />

        <div
          className=" flex  h-full  justify-center "
          id="cart"
        >
          <button className="z-30 ">
            <Cart
              alt="cart"
              className="w-8 h-8 hover:scale-110"
            />
          </button>
          <PatratRoz scrollDirection={scrollDirection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
