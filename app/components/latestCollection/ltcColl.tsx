"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { grabLatestCollections } from "@/app/lib/action";

const LatestCollection = () => {
  const [latestCollections, setLatestCollections] = useState<any>([]);

  const handleMintCurrentCollection = async (e: any) => {
    e.preventDefault();

    try {
      console.log(e.target.mint_amount.value);

      console.log("handleing the current collection mint");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const gg = async () => {
      try {
        const recentCo = await grabLatestCollections();

        setLatestCollections(recentCo);

      } catch (error) {
        console.log(error);

      }
    };

    gg();
  }, []);


  console.log(latestCollections)

  return (
    <div className="w-full bg-[#222] p-4 h-fit mt-4  flex flex-col gap-10">

      <header className="w-full p-3 bg-[#111] rounded-lg">
        <h2 className="text-3xl font-bold">Recent Collections</h2>
        <p>
          List yours up be sure to provide a valid link to site.
        </p>
      </header>


      {latestCollections.map((item:any, index) => (
        <div key={crypto.randomUUID()} className="bg-[#555] w-full">

          <div className="p-5">

            {/* Lattest collection */}
            <h2 className="text-4xl text-center font-bold mb-4">
              {item.collectionName}
            </h2>

            <div className="flex items-center gap-10 mb-4 md:flex-row flex-col ">

              {/* Carrpsal */}
              <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative">
                <Image src={item.image} alt="slow" fill />
              </div>

              {/*  This is a collection where you can see many different symbols and meanings that you can see capture a moment within the image tell you a story.  */}
              <p className="w-full md:w-[50%] text-xl mb-4">
                {item.collectionDescription}
              </p>

            </div>

            <a
              className="text-2xl font-bold bg-[#111] p-3  rounded-lg  "
              href={`/mint/${item.collectionContractAddress}`}
            >
              Read More
            </a>

          </div>

          <form className="p-3" onSubmit={handleMintCurrentCollection}>

            <h2 className="text-xl font-bold p-4 bg-[#111] mb-2 drop-shadow-lg">
              Token address:
              <span className="text-[2rem] ml-2">{item.collectionContractAddress}</span>
            </h2>

            <div className="w-full items-center flex justify-center gap-4">
              <input
                type="number"
                placeholder="enter amount"
                id="mint_amount"
                name="mint_amount"
                className="p-2 text-black rounded-lg"
              />

              <button className="p-2 bg-[#111] rounded-lg">enter</button>
            </div>
            
          </form>

        </div>
      ))}
    </div>
  );
};

export default LatestCollection;
