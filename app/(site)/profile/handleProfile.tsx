"use client";

import { useModal } from "@/app/hooks/use-modal-store";

const HandleProfile = () => {
  const { onOpen } = useModal();

  const handleNFTList = async () => {
    try {
      console.log("Gate my life");
      onOpen("CreateNFTListingtsxModel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between bg-[#000] p-4">
      <button
        className="bg-[#222] p-3 rounded-lg hover:bg-[#222] hover:bg-[#111]"
        onClick={handleNFTList}
      >
        create nft
      </button>

      <a
        href="/nft-view"
        className="bg-[#222] p-3 rounded-lg hover:bg-[#222] hover:bg-[#111]"
      >
        view minted
      </a>
    </div>
  );
};

export default HandleProfile;
