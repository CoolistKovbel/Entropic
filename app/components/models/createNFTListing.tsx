"use client";

import React, { useState } from "react";
import { useModal } from "@/app/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { handleNFTListing } from "@/app/lib/action";

const CreateNFTListingtsxModel = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "CreateNFTListingtsxModel";

  const router = useRouter();
  const [deFile, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("imageBanner", (deFile as File) || null);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Interact with the contract using the signer

      // const etherValue = ethers.utils.formatEther(channelCost.toString());
      // const weiValue = ethers.utils.parseEther(etherValue);

      // Perform the necessary actions with the contract

      const gg = await handleNFTListing(formData);

      console.log(gg);

      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <form onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Create NFT Listing</h2>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
          <label className="block mb-2">
            Description:
            <input
              type="text"
              name="description"
              id="description"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
          <label className="block mb-2">
            Address:
            <input
              type="text"
              name="address"
              id="address"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
          <label className="block mb-2">
            Cost:
            <input
              type="amount"
              name="cost"
              id="cost"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
          <label className="block mb-4">
            Fan,Community, Default banner:
            <input
              type="file"
              onChange={handleFileChange}
              id="file"
              name="file"
              className="mt-1 block w-full"
            />
          </label>
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CreateNFTListingtsxModel;
