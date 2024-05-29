import MintPage from "@/app/components/collectionList/mintPage";
import { getSession } from "@/app/lib/action";

const Page = async () => {
  const user = await getSession();

  const collection = {
    collectionName: "Name",
    collectionImageIpfs: "ipfs://",
    tokenAddress: "0x",
    collectionImage: "/page.url",
    collectionDescription: "descroption",
  };

  return (
    <main className="p-4">
      <MintPage userSession={user} />
    </main>
  );
};

export default Page;
