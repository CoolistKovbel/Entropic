"use server";

import { getSession, grabRecentCollection } from "@/app/lib/action";
import Image from "next/image";
import HandleNFTListing from "./handleNFTListing";
import Link from "next/link";

const page = async () => {
  const userIsLogged = await getSession();

  // Grab latest collection
  const gg = await grabRecentCollection();

  return (
    <section className="w-full min-h-screen p-4 ">
      <header className="w-full bg-[#222] mb-10 rounded-lg">
        <h2 className="text-2xl p-3 font-bold bg-[#333]">Latest mint</h2>

        {/* latest Collection */}
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

              <div className="w-full flex items-start gap-4  text-[12px]">
                <p className="p-2 bg-[#333] rounded-lg">Total Holders: 0</p>
                <p className="p-2 bg-[#333] rounded-lg">
                  Total View: {gg[0].views}
                </p>
                <p className="p-2 bg-[#333] rounded-lg">
                  Total Interest: {gg[0].interests.length}
                </p>
              </div>

              <a
                href={`/mint/${gg[0]._id}`}
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
        {gg!.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="p-4 bg-[#222] w-full rounded-lg flex items-center justify-between"
          >
            <header className="w-[70%] flex items-center flex-col">
              <p className="text-2xl font-bold">{item.collectionName}</p>

              <div className="text-center mt-10">
                <div className="flex items-center justify-between gap-3 rounded-lg w-80% mb-4">
                  <p className="bg-[#111] p-3">
                    views: <span>{item.views}</span>
                  </p>
                  <p className="bg-[#111] p-3">
                    interest: <span>{item.interests.length}</span>
                  </p>
                  <p className="bg-[#111] p-3">
                    holders: <span>10</span>
                  </p>
                </div>

                <Link
                  href={`/mint/${item._id}`}
                  className="w-full bg-[#000] p-3 hover:bg-[#555] rounded-lg"
                >
                  Read More
                </Link>
              </div>
            </header>

            <div className="w-[300px] h-[300px] relative">
              <Image src={item.image as string} alt="slow life" fill />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
