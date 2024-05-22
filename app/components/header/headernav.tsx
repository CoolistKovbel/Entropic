"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LogoutButton from "../logoutbutton";

interface HeaderNav {
  user: any;
}

const HeadernNav = ({ user }: HeaderNav) => {
  
  const [handleMint, setHandleMint] = useState(user.length > 0);
  const [handleDrop, setHandleDrop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setHandleDrop(false);
    }
  };

  useEffect(() => {
    if (handleDrop) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleDrop]);

  return (
    <nav className="p-10">
      {user?.isLoggedIn ? (
        <div className="flex items-center bg-[#111] p-2 rounded-lg relative w-[100px]" ref={dropdownRef}>

          <p className="w-full">{user.username?.substring(0, 5)}</p>

          <button onClick={handleDropDown}>↓</button>
          {handleDrop && (
            <div className="absolute top-0 right-0 bg-[#222] w-[200px] h-[300px] p-4">
             
              <Link href="/profile" className="text-md p-2 bg-[#333] w-full block text-center font-bold">Profile</Link>
              
              <LogoutButton />

            </div>
          )}
        </div>
      ) : (
        <div>
          <Link href="/login" className="bg-[#111] p-3 rounded-lg font-bold w-full text-center md:text-left">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HeadernNav;
