import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <nav className="flex items-center gap-2 bg-[#222] p-4 rounded-lg flex-col md:flex-row">
      <Link
        href="/mint"
        className="bg-[#111] p-3 rounded-lg font-bold  w-full md:w-[20%] text-center md:text-left"
      >
        latest mint
      </Link>

      <Link
        href="/gallary"
        className="bg-[#111] p-3 rounded-lg font-bold  w-full md:md:w-[20%] text-center md:text-left"
      >
        gallary
      </Link>

      <Link
        href="/about"
        className="bg-[#111] p-3 rounded-lg font-bold  w-full md:md:w-[20%] text-center md:text-left"
      >
        about
      </Link>

      <Link
        href="/contact"
        className="bg-[#111] p-3 rounded-lg font-bold  w-full md:md:w-[20%] text-center md:text-left"
      >
        contact
      </Link>

      <nav className="p-2 ">
        <Link
          href="/login"
          className="bg-[#111] p-3 rounded-lg font-bold  w-full  text-center md:text-left"
        >
          Login
        </Link>
      </nav>
    </nav>
  );
};

export default MainHeader;
