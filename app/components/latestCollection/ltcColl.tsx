"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const LatestCollection = () => {

  const handleMintCurrentCollection = async (e:any) => {
    e.preventDefault()

    try {
      console.log(e.target.mint_amount.value)

      console.log("handleing the current collection mint");
    } catch (error) {
      console.log(error);
    }
  };


  // Grab useEffect

  const latestCollection = [
    {
      collectionName: "Enphonite Collection",
      tokenAddress: "0xBc77b0C4BCA055eea3c7e36D61B25725CaE3D3A5",
      collectionTokenAddress: "0xd7eB556958F78DA37Dbade2AC1cA87Fd87ef1F0d",
      collectionImageIpfs: "/QmT2HZLQYc6G2tZmBjiC4YMLs44LoQK53DtAChGSWCUmW9",
      collectionImage: "/ephonite.png",
      collectionDescription:
        "This is a collection of 222 erc-721 tokens that a user can user to post on their wall or even use in future platform game. "
    },
    {
      collectionName: "EntropicScene Collection", // mint page
      collectionImageIpfs: "/QmVtmo4YhX8HE7pPoVUeqH9gybYKAfUVVBpqk9zYdRKZT5",
      tokenAddress: "0xB31cD539B812be9C4DDC881214e2CD29888de54F",
      collectionRewardToken: "0x8F4eb6a6Bcfd5Af48aa9068a907c327e0e092BA4",
      collectionImage: "/entropic-item.png",
      collectionDescription:
        "Welcome to the marketplace that allow you to trade between different types of nfts that are either items from different games, or club collectables, or items that you just want to seem to add to your collection of tokens. By holding this token you hold benifit of earning 1% trade fee from each transfers and  elgiable to put to stake to earn more rewards.",
    },
    {
      collectionName: "EpeticlePet Handle",
      collectionImageIpfs: "/Q",
      tokenAddress: "0",
      collectionRewardToken: "0",
      collectionImage: "/",
      collectionDescription:
        "EpeticlePet is an online service and vendor for your pets where you can get yourself pet supplies using the reward token this token allows you to generate."
    },
    {
      collectionName: "Pinote",
      collectionImageIpfs: "/Q",
      tokenAddress: "0",
      collectionRewardToken: "0",
      collectionImage: "/",
      collectionDescription:
        "d"
    },
    {
      collectionName: "MysticMurko",
      collectionImageIpfs: "/Q",
      tokenAddress: "0",
      collectionRewardToken: "0",
      collectionImage: "/",
      collectionDescription:
        "d"
    },
    {
      collectionName: "PhotuneLightway",
      collectionImageIpfs: "/Q",
      tokenAddress: "0",
      collectionRewardToken: "0",
      collectionImage: "/",
      collectionDescription:
        "d"
    },
    {
      collectionName: "PrimeBlossomVault",
      link: "https://www.primeblossomdeapp.com/",
      collectionImageIpfs: "/Q",
      tokenAddress: "0",
      collectionRewardToken: "0",
      collectionImage: "/",
      collectionDescription:
        "d"
    },
  ];

  useEffect(() => {






  } ,[])

                                               

  return (
    <div className="w-full bg-[#222] p-4 h-fit mt-4  flex flex-col gap-10">
      {latestCollection.map((item, index) => (
        <div key={crypto.randomUUID()} className="bg-[#555] w-full">

          <div className="p-5">
            {/* Lattest collection */}
            <h2 className="text-4xl text-center font-bold mb-4">{item.collectionName}</h2>
            
            <div className="flex items-center gap-10 mb-4 md:flex-row flex-col ">
              {/* Carrpsal */}
              <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative">
                <Image src={item.collectionImage} alt="slow" fill />
              </div>

              {/*  This is a collection where you can see many different symbols and meanings that you can see capture a moment within the image tell you a story.  */}
              <p className="w-full md:w-[50%] text-xl mb-4">{item.collectionDescription}</p>
              
            </div>

            <a className="text-2xl font-bold bg-[#111] p-3 rounded-lg" href={`/mint/${index}`} >
              Read More
            </a>
            
          </div>

          <form className="p-3" onSubmit={handleMintCurrentCollection}>

            <h2 className="text-xl font-bold p-4 bg-[#111] mb-2 drop-shadow-lg">
              Token address: <span className="text-[.8rem]">{item.tokenAddress}</span>
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
