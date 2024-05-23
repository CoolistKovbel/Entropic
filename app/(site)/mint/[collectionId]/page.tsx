import MintPage from "@/app/components/collectionList/mintPage";
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
      <MintPage />
    </main>
  );
};

export default Page;
