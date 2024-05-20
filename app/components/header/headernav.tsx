"use client";

import { useState } from "react";
import Link from "next/link";
import { logout } from "@/app/lib/action";

interface HeaderNav {
  user: any;
}

const HeadernNav = ({ user }: HeaderNav) => {
  const [handleMint, setHandleMint] = useState(!!user);

  const handlePhotoMint = async () => {
    try {
      console.log("handle user mint");
      setHandleMint((handleMint) => !handleMint);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="p-2 ">
      {handleMint ? (
        <div className="flex items-center bg-[#111] p-2 rounded-lg ">
          <p>{user.username?.substring(0, 5)}</p>
          <button onClick={handlePhotoMint}>↓</button>
          <button
            onClick={logout}
            className="bg-[#111] p-3 rounded-lg font-bold  w-full  text-center md:text-left"
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link
            href="/login"
            className="bg-[#111] p-3 rounded-lg font-bold  w-full  text-center md:text-left"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HeadernNav;
