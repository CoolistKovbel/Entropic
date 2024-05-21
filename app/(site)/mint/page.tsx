
import { getSession } from "@/app/lib/action";
import Image from "next/image";

const page = async () => {

  const userIsLogged = await getSession();
  


  const slowlife = [
    {
      collectionName: "Enphonite Collection",
      tokenAddress: "0xBc77b0C4BCA055eea3c7e36D61B25725CaE3D3A5",
      collectionTokenAddress: "0xd7eB556958F78DA37Dbade2AC1cA87Fd87ef1F0d",
      collectionImageIpfs: "/QmT2HZLQYc6G2tZmBjiC4YMLs44LoQK53DtAChGSWCUmW9",
      collectionImage: "/ephonite.png",
      collectionDescription:
        "This is a collection of 222 erc-721 tokens that a user can user to post on their wall or even use in future platform game. "
    },
    {
      collectionName: "EntropicScene Collection", // mint page
      collectionImageIpfs: "/QmVtmo4YhX8HE7pPoVUeqH9gybYKAfUVVBpqk9zYdRKZT5",
      tokenAddress: "0xB31cD539B812be9C4DDC881214e2CD29888de54F",
      collectionRewardToken: "0x8F4eb6a6Bcfd5Af48aa9068a907c327e0e092BA4",
      collectionImage: "/entropic-item.png",
      collectionDescription:
        "Welcome to the marketplace that allow you to trade between different types of nfts that are either items from different games, or club collectables, or items that you just want to seem to add to your collection of tokens. By holding this token you hold benifit of earning 1% trade fee from each transfers and  elgiable to put to stake to earn more rewards.",
    },
    
  ]
                  

  return (
    <section className="w-full min-h-screen p-4">

      {userIsLogged.isLoggedIn && (
        <div className="flex items-center justify-between mb-3">
          <a
            href="/nft"
            className="bg-[#222] p-3 rounded-lg hover:bg-[#222] hover:bg-[#111]"
          >
            create nft
          </a>
          <a
            href="/nft-view"
            className="bg-[#222] p-3 rounded-lg hover:bg-[#222] hover:bg-[#111]"
          >
            view minted
          </a>
        </div>
      )}

      <header className="w-full bg-[#222]">

        <h2 className="text-2xl p-3 font-bold bg-[#333]">Latest mint</h2>

        {/* Collection */}
        <div className="flex items-center gap-4 p-4 bg-[#444] flex-col justify-center">

          <div className="w-[50%]">
            <h2 className="text-3xl p-1 mb-2 text-center">
              Ephonite Collection
            </h2>
            <div className="w-[300px] h-[300px] relative">
              <Image src="/ephonite.png" alt="art concept nft" fill />
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-[#222] drop-shadow-lg rounded-lg">
            <h3 className="text-2xl">Total Mint: 222</h3>
            <p>Contract Address: 0x31e</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              velit optio dolorum deserunt qui numquam molestias! Debitis eaque
              iste ipsam vero, rem animi! Iusto debitis reprehenderit a, libero
              excepturi impedit!
            </p>

            <a
              href="/mint/4"
              className="bg-[#111] font-bold rounded-lg p-2 hover:bg-[#444]"
            >
              Learn More
            </a>
          </div>

        </div>

      </header>

      {
        slowlife.map((item) => ( 
          <div key={crypto.randomUUID()} className="p-4 bg-[#222]">
            <header>
              <h1 className="text-2xl mb-2">{item.collectionName}</h1>
              <p className="text-md">{item.collectionDescription}</p>
            </header>
            <div className="w-[300px] h-[300px] relative">
              <Image src={item.collectionImage} alt="slow life" fill />
            </div>
          </div>
        ))
      }

    </section>
  );
};

export default page;
