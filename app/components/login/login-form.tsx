"use client";

import { handleLogin } from "@/app/lib/action";
import { getEthereumAccount } from "@/app/lib/web3";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  // Handle user login
  const handleUserLogin = async (e: any) => {
    try {
      e.preventDefault();

      // Ensure window.ethereum is available
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed");
      }

      // Create a provider and signer using ethers.js
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Request user to connect their account
      const signer = provider.getSigner();

      const currentUserAccount = await getEthereumAccount(); // Ensure this returns a string or plain object
      const message = `You are the current account holder signing at ${Date.now()}`;
      const signature = await signer.signMessage(message);
      const userAddress = ethers.utils.verifyMessage(message, signature);

      // Create a plain object payload
      const payload = {
        userAddress,
        currentUserAccount,
        signature,
      };

      const response = await handleLogin(payload);

      if (response.status === "new" || response.status === "exists") {
        // Redirect to profile page on successful login
        router.push("/profile");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full flex-col flex items-center gap-8 "
      onSubmit={handleUserLogin}
    >

      <button className="bg-[#000] p-4 rounded-lg text-[2rem]">Sign In</button>

      <p className="text-sm underline capitalize">Have MetaMask downloaded</p>
    </form>
  );
};

export default LoginForm;
