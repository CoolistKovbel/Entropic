import MintPage from "@/app/components/collectionList/mintPage";

const Page = async () => {

  



  const collection = {
    collectionName: "Name",
    collectionImageIpfs: "ipfs://",
    tokenAddress: "0x",
    collectionImage: "/page.url",
    collectionDescription: "descroption"
  }

  return (
    <main className="p-4">
      <MintPage />
    </main>
  );
};

export default Page;
