"use client";

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
  

  const handleContractData = async (ed: any) => {
    try {
      console.log("stupid dum fucking moron");

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get the signer
      const signer = provider.getSigner();

      //

      // Contract main
      const contractInstance = new ethers.Contract(
        ContractNFTCollection,
        erc721TokenAbi,
        signer
      );

      return contractInstance;
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
