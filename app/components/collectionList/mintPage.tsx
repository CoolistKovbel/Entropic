"use client";

import {
  getSpecfocContractDatra,
  handleInterestToggle,
} from "@/app/lib/action";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MintPageProps {
  userSession: any;
}

const MintPage = ({ userSession }: MintPageProps) => {

  const pathname = usePathname();
  const [ContractData, setContractData] = useState<any>([]);
  const contractAddress = pathname.split("/")[2];
  
  const handleContractData = async (ed: any) => {
    try {
      const gg = await getSpecfocContractDatra(ed);
      setContractData(gg[0]);
    } catch (error) {
      console.log(error);
    }
  };


  const handleInterest = async () => {
    try {
      console.log("stupid");

      const gg = await handleInterestToggle(contractAddress, userSession);

      console.log(gg, "anything");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const xx = async () => {
      await handleContractData(contractAddress);
    };

    xx();
  }, [contractAddress]);

  return (
    <div>
      {ContractData ?  (
        <section className="bg-[#222] p-10 flex items-center">
          
          <div className="w-[50%]">
            <h2 className="text-4xl font-bold mb-4">{ContractData.collectionName}</h2>
    
            <div className="w-[300px] h-[300px] relative">
              <Image src={ContractData.image} alt="nft collection image" fill />
            </div>
    
            <p className="text-sm text-center mt-4">{ContractData.collectionDescription}</p>
          </div>
    
          <div className="w-[50%] flex flex-col bg-[#443] p-10 rounded-lg drop-shadow-lg">
            <div>

              <h2 className="text-2xl mb-2">
                Address: {ContractData.collectionContractAddress}
              </h2>

              <h3 className="font-bold">Views: {ContractData.views}</h3>
    
              <form>
                <label
                  htmlFor="mintAmount"
                  className="flex items-center justify-between mt-2"
                >
                  <span className="text-xl">Mint</span>
                  <input type="amount" className="p-2 bg-[#000] text-xl" />
                </label>
    
                <button className="bg-[#111] p-2 rounded-lg float-right mt-4">
                  mint
                </button>
              </form>
            </div>
    
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center justify-between">
                <span>interest: {ContractData.interests}</span>
                <button
                  onClick={handleInterest}
                  className="bg-[#111] p-3 rounded-lg hover:bg-[#434]"
                >
                  🌠
                </button>
              </div>
            </div>
          </div>
        </section>

      ) : (
        <div>
          <h2>sucks</h2>
        </div>
      )}
    </div>
  );
};

export default MintPage;
