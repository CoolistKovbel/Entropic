"use client";

import React, { useState } from "react";
import { useModal } from "@/app/hooks/use-modal-store";
import { useRouter } from "next/navigation";

import { ethers } from "ethers";

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

  const onSubmit = async (values: any) => {
    try {
      const data = new FormData();

      const channelName = values.name;
      const channelCost = ethers.utils.parseEther(values.cost);
      const channelImage = deFile;

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //   const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const etherValue = ethers.utils.formatEther(channelCost.toString());
      const weiValue = ethers.utils.parseEther(etherValue);

      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog open={isModalOpen} onChange={handleClose}>
      <div>Hlelo</div>
    </dialog>
  );
};

export default CreateNFTListingtsxModel;
