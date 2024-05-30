"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import Link from "next/link";

interface HandleNFTListingProps {
  userIsLogged: any;
}

const HandleNFTListing = ({ userIsLogged }: HandleNFTListingProps) => {
  const { onOpen } = useModal();

  const handleNFTCollection = async () => {
    try {
      console.log("hate  my life");
      onOpen("CreateNFTListingtsxModel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userIsLogged.isLoggedIn && (
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handleNFTCollection}
            className="bg-[#222] p-3 rounded-lg hover:bg-[#222] hover:bg-[#111]"
          >
            create nft
          </button>

          <select className="bg-[#222] p-3">
            <option value="most-minted">most minted</option>
            <option value="least-minted">least minted</option>
            <option value="most-interested">most-interested</option>
          </select>

          <Link
            href="/profile"
            className="bg-[#222] p-3 rounded-lg hover:bg-[#222] hover:bg-[#111]"
          >
            view minted
          </Link>
        </div>
      )}
    </>
  );
};

export default HandleNFTListing;
