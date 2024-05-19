"use client";

import { handleLogin } from "@/app/lib/action";
import { getEthereumAccount } from "@/app/lib/web3";
import { ethers } from "ethers";

const LoginForm = () => {
  // Handle user login
  const handleUserLogin = async (e: any) => {
    try {
      e.preventDefault();

      //   secret
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const currentUserAccount = await getEthereumAccount();
      let message = `You are the current account holder signing at ${Date.now()}`;
      let signature = await signer.signMessage(message);
      const userAddress = ethers.utils.verifyMessage(message, signature);

      console.log("handle user login", userAddress);

      const payload: any = {
        userAddress,
        currentUserAccount,
        signature,
      };

      const g = await handleLogin(payload);

      console.log(g);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full flex-col flex items-center gap-4"
      onSubmit={handleUserLogin}
    >
      <p>Have metamask download</p>

      <button className="bg-[#000] p-2 rounded-lg">sign in</button>
    </form>
  );
};

export default LoginForm;
