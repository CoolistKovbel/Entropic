"use server"
import { getSession, grabRecentCollection } from "@/app/lib/action";
import Image from "next/image";
import HandleNFTListing from "./handleNFTListing";
import Link from "next/link";
import CollectionListing from "@/app/components/collectionList/collectionlisting";

const page = async () => {
  const userIsLogged = await getSession();

  // const slowlife = [
  //   {
  //     collectionName: "Enphonite Collection",
  //     tokenAddress: "0xBc77b0C4BCA055eea3c7e36D61B25725CaE3D3A5",
  //     collectionTokenAddress: "0xd7eB556958F78DA37Dbade2AC1cA87Fd87ef1F0d",
  //     collectionImageIpfs: "/QmT2HZLQYc6G2tZmBjiC4YMLs44LoQK53DtAChGSWCUmW9",
  //     collectionImage: "/ephonite.png",
  //     collectionDescription:
  //       "This is a collection of 222 erc-721 tokens that a user can user to post on their wall or even use in future platform game. ",
  //   },
  //   {
  //     collectionName: "EntropicScene Collection", // mint page
  //     collectionImageIpfs: "/QmVtmo4YhX8HE7pPoVUeqH9gybYKAfUVVBpqk9zYdRKZT5",
  //     tokenAddress: "0xB31cD539B812be9C4DDC881214e2CD29888de54F",
  //     collectionRewardToken: "0x8F4eb6a6Bcfd5Af48aa9068a907c327e0e092BA4",
  //     collectionImage: "/entropic-item.png",
  //     collectionDescription:
  //       "Welcome to the marketplace that allow you to trade between different types of nfts that are either items from different games, or club collectables, or items that you just want to seem to add to your collection of tokens. By holding this token you hold benifit of earning 1% trade fee from each transfers and  elgiable to put to stake to earn more rewards.",
  //   },
  //   {
  //     collectionName: "Pinote Collection", // mint page
  //     collectionImageIpfs: "/QmVtmo4YhX8HE7pPoVUeqH9gybYKAfUVVBpqk9zYdRKZT5",
  //     tokenAddress: "0x44C086a84398fB0Be95fB09C07CA51Df501713eE",
  //     collectionRewardToken: "0xE36C24D47b05037E33183570a86fb080f42f7415",
  //     collectionImage: "/67.png",
  //     collectionDescription:
  //       "The Collection that lates you commuicate with 2 others in a coding compitetion to compete for a higher title..",
  //   },
  //   {
  //     collectionName: " Collection", // mint page
  //     collectionImageIpfs: "/QmVtmo4YhX8HE7pPoVUeqH9gybYKAfUVVBpqk9zYdRKZT5",
  //     tokenAddress: "0xE36C24D47b05037E33183570a86fb080f42f7415",
  //     collectionRewardToken: "0x3336deBc102ce50a707CF8Df8c626aB338D55539",
  //     collectionImage: "/67.png",
  //     collectionDescription:
  //       "The Collection that lates you commuicate with 2 others in a coding compitetion to compete for a higher title..",
  //   },
  // ];

  // Grab latest collection
  
  const gg = await grabRecentCollection();

  console.log(gg, "Heay")

  return (
    <section className="w-full min-h-screen p-4 ">

      <header className="w-full bg-[#222] mb-10 rounded-lg">
        <h2 className="text-2xl p-3 font-bold bg-[#333]">Latest mint</h2>

        {/* Collection */}
        {gg && (
          <div className="flex items-center gap-4 p-4 bg-[#444] flex-col justify-center">

            <div className="w-full">

              <h2 className="text-4xl mb-2 text-center">
                {gg[0].collectionName}
              </h2>

              <div className="w-[300px] h-[300px] relative mx-auto">
                <Image src={gg[0].image} alt="art concept nft" fill />
              </div>

            </div>

            <div className="w-full flex flex-col gap-4 p-4 bg-[#222] drop-shadow-lg rounded-lg">
              <p className="text-2xl font-bold">
                Contract Address: {gg[0].collectionContractAddress}
              </p>

              <p className="text-[18px]">{gg[0].collectionDescription}</p>

              <div className="w-full flex items-start gap-4 flex-col text-[12px]">
                <p className="p-2 bg-[#333] rounded-lg">Total Holders: 0</p>
                <p className="p-2 bg-[#333] rounded-lg">Total View: 0</p>
                <p className="p-2 bg-[#333] rounded-lg">Total Interest: 0</p>
              </div>

              <a
                href="/mint/4"
                className="bg-[#111] font-bold rounded-lg p-2 hover:bg-[#444]"
              >
                Learn More
              </a>
            </div>

          </div>
        )}

      </header>

      <HandleNFTListing userIsLogged={userIsLogged} />

      <div className="w-full flex items-center flex-col w-full h-[800px] overflow-auto gap-4">

        <div
            key={crypto.randomUUID()}
            className="p-4 bg-[#222] w-full rounded-lg flex items-center justify-between"
          >

            <header className="w-[70%] flex items-center flex-col">

              <div className="text-center mt-10">
                <div className="flex items-center justify-between gap-3 rounded-lg w-80% mb-4">
                  <p className="bg-[#111] p-3">
                    views: <span>1000</span>
                  </p>
                  <p className="bg-[#111] p-3">
                    interest: <span>10</span>
                  </p>
                  <p className="bg-[#111] p-3">
                    holders: <span>10</span>
                  </p>
                </div>
                <Link
                  href="/"
                  className="w-full bg-[#000] p-3 hover:bg-[#555] rounded-lg"
                >
                  Read More
                </Link>
              </div>

            </header>

            <div className="w-[300px] h-[300px] relative">
              <Image src={gg![0].image as string} alt="slow life" fill />
            </div>
            
          </div>

          <div
            key={crypto.randomUUID()}
            className="p-4 bg-[#222] w-full rounded-lg flex items-center justify-between"
          >

            <header className="w-[70%] flex items-center flex-col">

              <div className="text-center mt-10">
                <div className="flex items-center justify-between gap-3 rounded-lg w-80% mb-4">
                  <p className="bg-[#111] p-3">
                    views: <span>1000</span>
                  </p>
                  <p className="bg-[#111] p-3">
                    interest: <span>10</span>
                  </p>
                  <p className="bg-[#111] p-3">
                    holders: <span>10</span>
                  </p>
                </div>
                <Link
                  href="/"
                  className="w-full bg-[#000] p-3 hover:bg-[#555] rounded-lg"
                >
                  Read More
                </Link>
              </div>

            </header>

            <div className="w-[300px] h-[300px] relative">
              <Image src={gg![0].image as string} alt="slow life" fill />
            </div>
            
          </div>


        
      </div>

    </section>
  );
};

export default page;
