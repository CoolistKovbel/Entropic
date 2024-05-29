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
  const [ContractData, setContractData] = useState<any>([]);
  const pathname = usePathname();
  const contractAddress = pathname.split("/")[2];

  console.log(ContractData);

  const handleContractData = async (ed: any) => {
    try {
      console.log("stupid dum fucking moron");

      const gg = await getSpecfocContractDatra(ed);

      console.log(gg, "slow life");
      setContractData(gg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInterest = async () => {
    try {
      console.log("stupid");

      const gg = await handleInterestToggle(contractAddress, userSession);

      console.log(gg);
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
    <section className="bg-[#222] p-10 flex items-center">
      <div className="w-[50%]">
        <div className="w-[300px] h-[300px] relative">
          <Image src={ContractData.image} alt="nft collection image" fill />
        </div>

        <h2 className="text-2xl font-bold">{ContractData.collectionName}</h2>
        <p className="text-sm">{ContractData.collectionDescription}</p>
      </div>

      <div className="w-[50%] flex flex-col">
        <div>
          <h2 className="text-2xl mb-2">
            Address: {ContractData.collectionContractAddress}
          </h2>
          <h3>Views: {ContractData.views}</h3>

          <form>
            <label
              htmlFor="mintAmount"
              className="flex items-center justify-between"
            >
              <span className="text-xl">Mint</span>
              <input type="amount" className="p-2 bg-[#000] text-xl" />
            </label>
            <button className="bg-[#111] p-2 rounded-lg">mint</button>
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
  );
};

export default MintPage;
