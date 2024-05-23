"use client";

import Image from "next/image";
import { usePathname } from 'next/navigation'

const MintPage = () => {
    const pathname = usePathname()
    const collection = {collectionImage: "", collectionName: "" , collectionDescription: ""}
    const contractAddress = pathname.split("/")[2]

    

  return (
    <section className="bg-[#222]">
      <div className="w-[300px] h-[300px]">
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
