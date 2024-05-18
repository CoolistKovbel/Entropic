import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-screen p-4">
   
      <header className="w-full bg-[#222]">
        <h2 className="text-2xl p-3 font-bold bg-[#333]">Latest mint</h2>

        {/* Collection */}
        <div className="flex items-center gap-4 p-4 bg-[#444]">

          <div className="w-[50%]">
            <h2 className="text-3xl p-1 mb-2 text-center">Ephonite Collection</h2>
            <div className="w-[300px] h-[300px] relative">
              <Image src="/ephonite.png" alt="art concept nft" fill />
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-[#222] drop-shadow-lg rounded-lg">
            <h3 className="text-2xl">Total Mint: 222</h3>
            <p>Contract Address: 0x31e</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, velit
              optio dolorum deserunt qui numquam molestias! Debitis eaque iste
              ipsam vero, rem animi! Iusto debitis reprehenderit a, libero
              excepturi impedit!
            </p>

            <a href="/mint/4" className="bg-[#111] font-bold rounded-lg p-2 hover:bg-[#444]">Learn More</a>
          </div>

        </div>


      </header>
    </section>
  );
};

export default page;
