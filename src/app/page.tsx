"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  function logit() {
    setScrollY(window.scrollY);
    router.push("/#2");
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    scrollY > 0 && console.log(scrollY);

    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <section className="flex mt-24  flex-col items-center justify-between">
      <div
        className="flex min-h-screen w-full bg-red-600"
        id="1"
      >
        <Link href="/#2">Scroll to specific id.</Link>
      </div>
      <div
        className="flex min-h-screen w-full bg-green-600"
        id="2"
      >
        2
      </div>
    </section>
  );
}
