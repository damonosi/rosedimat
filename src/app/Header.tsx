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
        layout="size"
        viewBox="0 0 405 60"
        transition={{
          layout: { type: "spring", stiffness: 100, duration: 1 },
        }}
        fill="none"
        className={`absolute h-[60px] top-0 right-0  bottom-0  ${
          scrollDirection === "down" && " w-screen"
        } `}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          layout="size"
          opacity="0.8"
          d="M1920 60H-2.90302e-06L147.162 0H1920V60Z"
          className="w-full h-[60px]"
          fill="#D3736D"
        />
      </motion.svg>
    </AnimatePresence>
  );
};

const Header = () => {
  const { data: session, status } = useSession();
  let scrollDirection = useScrollDirection();
  console.log(scrollDirection);
  return (
    <header className="flex fixed bg-site w-full h-[60px] z-50   border-b-2 overflow-hidden ">
      <div className="flex  w-full px-36 items-center h-[60px] justify-between ">
        <Link
          href="/"
          id="container-logo"
          className="relative "
        >
          <Logo className="w-12 h-12" />
        </Link>

        <nav className="z-30 flex gap-4 justify-end w-1/2 items-center">
          <Link
            href="/"
            id="container-logo"
            className="relative "
          >
            Produse
          </Link>
          <Link
            href="/"
            id="container-logo"
            className="relative "
          >
            Despre noi
          </Link>
          <Link
            href="/"
            id="container-logo"
            className="relative "
          >
            Contact
          </Link>
        </nav>
        <div
          className=" flex  h-full  justify-center "
          id="cart"
        >
          <button className="z-30 ">
            <Cart
              alt="cart"
              className="w-8 h-8"
            />
          </button>
          <PatratRoz scrollDirection={scrollDirection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
