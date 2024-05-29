"use client";

import { NFTListing } from "@/app/models/Collection";
import { ethers } from "ethers";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MintPage = () => {

  const pathname = usePathname();

  const collection = {
    collectionImage: "",
    collectionName: "",
    collectionDescription: "",
  };

  const contractAddress = pathname.split("/")[2];

  console.log(contractAddress,"literralty")
  

  const handleContractData = async (ed: any) => {
    try {
      console.log("stupid dum fucking moron");

      const gg = await NFTListing.find({
        collectionContractAddress:contractAddress
      })

      console.log(gg, "slow life")
    

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const xx = async () => {
      const stupid = await handleContractData(contractAddress);

      console.log(stupid);
    };

    xx();
  }, []);

  return (
    <section className="bg-[#222] ">
      <div className="w-[300px] h-[300px] relative">
        <Image
          src={collection.collectionImage}
          alt="nft collection image"
          fill
        />
      </div>

      <h2 className="text-2xl">{collection.collectionName}</h2>
      <p className="text-sm">{collection.collectionDescription}</p>
    </section>
  );
};

export default MintPage;
