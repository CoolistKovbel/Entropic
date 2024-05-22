"use server";

interface CollectionListingProps {
  collProps: any;
}

const CollectionListing = async ({ collProps }: CollectionListingProps) => {
  const gg = await collProps;

  return (
    <div className="bg-[#222] p-4">
      {gg.map((item: any) => {
        <div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{item.collectionName}</h1>
            <p className="text-md">{item.collectionDescription}</p>
          </div>
          {item.collectionContractAddress}
        </div>;
      })}
    </div>
  );
};

export default CollectionListing;
