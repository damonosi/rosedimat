"use client";
import useScrollDirection from "@/hooks/useScrollDirection";
import Cart from "@/public/imagini/cart.svg";
import Logo from "@/public/imagini/logo.svg";
import PatratRoz from "@/public/imagini/patratRoz-header.svg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  let direction = useScrollDirection();
  console.log(direction);
  return (
    <header className="flex fixed bg-site w-full h-[60px] z-50   border-b-2 overflow-hidden ">
      <div className="flex  w-full px-36 items-center h-[60px] justify-between ">
        <Link
          href="/"
          id="container-logo"
          className="relative "
        >
          <Image
            alt="logo"
            src={Logo}
            className="w-12 h-12"
          />
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
            <Image
              alt="cart"
              className=""
              src={Cart}
            />
          </button>

          <Image
            alt="patrat-roz"
            className="absolute  z-20 right-0 top-0  h-[60px]"
            src={PatratRoz}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
