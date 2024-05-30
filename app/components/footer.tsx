import Link from "next/link";
import React from "react";

const FooterMain = () => {
  return (
    <footer className="flex items-center justify-between w-full p-4 flex-col md:flex-row bg-[#444]">

      <div className="bg-[#222] p-4 rounded-lg drop-shadow-lg text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Ephotopicup</h1>
        <p>
         The Place to list and support your favorite nft collections
        </p>
      </div>

      <nav className="flex items-center  p-5 gap-2 bg-[#111] text-white  rounded-lg"> 
      
      <p className="-rotate-90 text-2xl font-bold">links</p>

      <div className="flex items-center flex-col p-5 gap-2 bg-[#555] rounded-lg drop-shadow-lg">  
          <Link
            href="/"
            className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
          >
            Contact
          </Link>
          <Link
            href="/stake"
            className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
          >
            Stake
          </Link>
      </div>          
      </nav>

    </footer>
  );
};

export default FooterMain;
