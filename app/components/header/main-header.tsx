import Link from "next/link";
import React from "react";
import { getSession } from "../../lib/action";
import HeadernNav from "./headernav";

const MainHeader = async () => {
  const user = await getSession();

  console.log("de current sessoin", JSON.stringify(user))

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

      <Link
        href="/"
        className="bg-[#111] p-3 rounded-lg font-bold  w-full md:md:w-[20%] text-center md:text-left"
      >
        🎛️
      </Link>

      <HeadernNav user={JSON.stringify(user)} />
    </nav>
  );
};

export default MainHeader;
