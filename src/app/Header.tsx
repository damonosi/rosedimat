"use client";
import {
  LoginButton,
  LogoutButton,
} from "@/components/butoaneAuth/ButoaneAuth";
import Logo from "@/public/imagini/logo.svg";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex fixed w-full h-24 items-center border-b-2 justify-between px-16">
      <div
        id="container-logo"
        className="relative "
      >
        <Image
          alt="logo"
          src={Logo}
          className="w-14 h-14"
        />
      </div>
      <div id="account">
        {session?.user ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Header;
