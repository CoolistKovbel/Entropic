"use client";

import React from "react";
import Image from "next/image";

const LatestCollection = () => {
  const handleMintCurrentCollection = async () => {
    try {
      console.log("handleing the current collection mint");
    } catch (error) {
      console.log(error);
    }
  };

  const latestCollection = [
    {
      collectionName: "IVCOUP Collection",
      tokenAddress: "0x131241r",
      collectionImageIpfs: "/",
      collectionDescription:
        "Welcome to the high tech life style where life is moving fast and sweet....with 222 tokens availble, where with those who hold it are able to earn transaction fees as have benifits to places that accept it.",
    },
    {
      collectionName: "Emurno Collection",
      collectionImageIpfs: "/",
      tokenAddress: "0x12312",
      collectionDescription:
        "Welcome to the marketplace that allow you to trade between different types of nfts that are either items from different games, or club collectables, or items that you just want to seem to add to your collection of tokens. By holding this token you hold benifit of earning 1% trade fee from each transfers and  elgiable to put to stake to earn more rewards.",
    },
  ];

  return (
    <div className="w-full bg-[#222] p-4 h-fit mt-4  flex flex-col gap-10">
      {latestCollection.map((item) => (
        <div key={crypto.randomUUID()} className="bg-[#555] w-full">

          <div className="p-5">
            {/* Lattest collection */}
            <h2 className="text-4xl font-bold">
              {item.collectionName}
            </h2>

            {/* Carrpsal */}
            <div className="w-[300px] h-[300px] relative">
              <Image src="/" alt="slow" fill />
            </div>

            {/*  This is a collection where you can see many different symbols and meanings that you can see capture a moment within the image tell you a story.  */}
            <p className=" text-xl mb-4">
              {item.collectionDescription}
            </p>

            <a className="text-2xl font-bold bg-[#111] p-3 rounded-lg">
              Read More
            </a>
          </div>

          <form className="p-3" onSubmit={handleMintCurrentCollection }>
            
            <h2 className="text-xl font-bold p-4 bg-[#111] mb-2 drop-shadow-lg">
              Token address: <span>{item.tokenAddress}r</span>
            </h2>

            <input
              type="amount"
              placeholder="enter amount"
              id="mint_amount"
              name="mint_amount"
              className="p-2 text-black"
            />

            <button className="p-2 bg-[#111] rounded-lg">enter</button>
          </form>

        </div>
      )
      )}
    </div>
  );
};

export default LatestCollection;
