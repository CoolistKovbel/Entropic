"use client"

import React from "react";
import Image from "next/image";

const LatestCollection = () => {


    const handleMintCurrentCollection = async () => {
        try {
            
            console.log("handleing the current collection mint")


        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div className="w-full bg-[#222] h-fit p-3 mt-4">
      <div className="p-2">
        <h2 className="text-4xl"> EnviGala Collection</h2>

        <div className="w-[300px] h-[300px] relative">
          <Image src="/" alt="slow" fill />
        </div>

        <p className="font-bold text-xl">
          A collection of images that represent the Envi Gala collection. With
          each token minted a user get to share a small part of the trading
          reward benifit that comes as well as allowed to{" "}
        </p>

        <p></p>
      </div>

      <form>
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
  );
};

export default LatestCollection;
