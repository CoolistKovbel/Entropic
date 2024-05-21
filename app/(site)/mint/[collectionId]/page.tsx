import Image from "next/image";
import React from "react";

const Page = () => {




  const collection = {
    collectionName: "Name",
    collectionImageIpfs: "ipfs://",
    tokenAddress: "0x",
    collectionImage: "/page.url",
    collectionDescription: "descroption"
  }






  return (
    <main className="p-4">
      <div className="w-[300px] h-[300px]">
        <Image src={collection.collectionImage} alt="nft collection image" fill />
      </div>
      <h2 className="text-2xl">{collection.collectionName}</h2>
      <p className="text-sm">
        {collection.collectionDescription}
      </p>
    </main>
  );
};

export default Page;
