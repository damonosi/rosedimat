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
    className={`z-30 flex gap-4 md:justify-end w-full md:w-1/2 items-center justify-center ${
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
  const [opened, setOpenMenu] = useState(false);

  let scrollDirection = useScrollDirection();

  return (
    <header className=" fixed bg-site w-screen h-[60px] z-50   ">
      <section
        className="hidden md:flex   w-full  md:px-36 items-center h-[60px] justify-between "
        id="desktop"
      >
        <LogoLink scrollDirection={scrollDirection} />

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
      </section>
      <section
        id="mobile"
        className="md:hidden relative flex w-full justify-between h-[60px] items-center px-2"
      >
        <h1>ROSE DIMAT</h1>
        <LogoMenu
          opened={opened}
          setOpenMenu={setOpenMenu}
        />{" "}
        <AnimatePresence>
          {opened && (
            <motion.div
              key="meniuMobile"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "-10%", opacity: 0 }}
              className="absolute z-10 right-0 left-0 flex-col px-2 flex justify-center items-center h-16 top-full bg-site"
            >
              <motion.hr
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                transition={{ delay: 0.5 }}
                exit={{ x: "-50%", opacity: 0 }}
                className="w-full h-1 bg-roz rounded-r-xl rounded-l-xl "
              />
              <Navigation />
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </section>
    </header>
  );
};

export default Header;
