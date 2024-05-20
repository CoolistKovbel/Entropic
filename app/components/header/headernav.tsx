"use client";

import { useState } from "react";
import Link from "next/link";
import LogoutButton from "../logoutbutton";

interface HeaderNav {
  user: any;
}

const HeadernNav = ({ user }: HeaderNav) => {
  const [handleMint, setHandleMint] = useState(user.length > 0);

  const [handleDrop, setHandleDrop] = useState(false);

  console.log(user);

  const handlePhotoMint = async () => {
    try {
      console.log("handle user mint");
      setHandleMint((handleMint) => !handleMint);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropDown = async () => {
    try {
      setHandleDrop((prevDrop) => !prevDrop);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="p-2 ">
      {user.isLoggedIn ? (
        <div className="flex items-center bg-[#111] p-2 rounded-lg  relative">
          <p>{user.username?.substring(0, 5)}</p>
          <button onClick={handleDropDown}>↓</button>
          {handleDrop && (
            <div className="absolute top-0 right-0 bg-[#222] w-[400px] h-[300px]">
              <Link href="/profile">Profile</Link>

              <LogoutButton />
            </div>
          )}
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
