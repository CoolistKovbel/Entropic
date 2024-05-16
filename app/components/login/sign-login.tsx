"use client";


import { ethers } from "ethers";

// Address

// Abi


const LoginSign = () => {
  const handleSign = async () => {
    try {
      console.log("handling signautre");


      //     
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      dApp,
      signer
    );


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center flex-col flex items-center gap-4 drop-shadow-lg rounded-lg">

      <p className="underline text-sm">Already have an account sign here</p>
      <button onClick={handleSign} className="p-2  bg-[#000] rounded-lg">Sign</button>
    </div>
  );
};

export default LoginSign;
