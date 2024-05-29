import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold">About Ephotopicup</h2>
    
        <div className="p-10 text-[1.3rem]">
        <p>
            This is a small decentralized application where you are able to upload
            your very nft collection to allow others to find your minting website.
            We want to be able to allow others to share their art as well as allow
            others to be noticed of their talents to be able to reward those with
            talents that are hidden.
        </p>

        <div className="flex items-center justify-between gap-4 bg-[#222] p-4 rounded-lg">
           
           <div className="w-[40%] flex flex-col gap-4">
           <p >           
            Feel free to mint yourself our very own erc-721 token that will allow
            you a small reward from our fee system. for every transaction fee
            those who hold the nft will get a small amount of earnings back.
            </p>

            <Link className="bg-[#111] p-3 drop-shadow-lg " href="https://etherscan.io/address/0xB31cD539B812be9C4DDC881214e2CD29888de54F" target="_blank">EtherScan 🎛️</Link>
            </div> 
            

            
            <div className="w-[400px] h-[400px] relative">
                <Image src="/logo.png" alt="erc token" fill />
            </div>

        </div>

        <p>
            We are a local nft collectors station where we also enjoy trading and
            collecting different types of nfts from art to certain tokenomics. We
            look for and cruated our own type of collections and would like to
            introduce a way for others to also share.
        </p>
        </div>
    </section>
  );
};

export default Page;
