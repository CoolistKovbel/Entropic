"use client";

import { useEffect, useState } from "react";
import CreateNFTListingtsxModel from "../models/createNFTListing";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateNFTListingtsxModel />
    </>
  );
};
