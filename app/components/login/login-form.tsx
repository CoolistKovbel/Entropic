"use client";

import { getEthereumAccount } from "@/app/lib/web3";
import { ethers } from "ethers";
import React from "react";

const LoginForm = () => {
  const handleUserLogin = async (e: any) => {
    try {
      e.preventDefault();

      const gg = e.target.secretName.value;

      //   secret

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const currentUserAccount = await getEthereumAccount();

      let message =
        "I am the real owner of this account thank you very much... 🐱‍💻";

      let signature = await signer.signMessage(message);

      const userAddress = ethers.utils.verifyMessage(message, signature);

      console.log("handle user login", gg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full flex-col flex items-center gap-4"
      onSubmit={handleUserLogin}
    >
      <input
        type="text"
        placeholder="enter secret name"
        className="p-2 text-black w-full rounded-lg"
        id="secretName"
        name="secretName"
      />
      <button className="bg-[#000] p-2 rounded-lg">sign</button>
    </form>
  );
};

export default LoginForm;
