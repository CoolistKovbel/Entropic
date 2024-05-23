"use server";

import { grabLatestCollections } from "@/app/lib/action";

const CollectionListing = async () => {
  const grabALLCollections = async () => {
    try {
      const wg = await grabLatestCollections();

      return wg;
    } catch (error) {
      console.log(error);
    }
  };

  const starter = await grabALLCollections();
 
  console.log("Why this is not ", starter);

  return (
    <div className="bg-[#222] p-10">
      {starter!.map((item: any) => {
        return (
          <div key={crypto.randomUUID()}>
            <div>
              <h1 className="text-3xl font-bold mb-2">{item.collectionName}</h1>
              <p className="text-md">{item.collectionDescription}</p>
            </div>
            {item.collectionContractAddress}
          </div>
        );
      })}
    </div>
  );
};

export default CollectionListing;
