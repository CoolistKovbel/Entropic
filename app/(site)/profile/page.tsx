import Image from "next/image";
import React from "react";

const Page = () => {
  const isLogged = false;

  const userNFTArray = [
    {
      image: "1",
      ipfs: "/entropic-item.png",
    },
  ];

  return (
    <main>
      <h2 className="text-2xl">Profile Page</h2>

      <div>
        <h2 className="text-2xl">0x12312</h2>

        <div className="w-[300px] h-[300px] relative">
          <Image src="/ephonite.png" alt="nft collection item" fill />
        </div>
      </div>

      <div>
        <h2 className="text-2xl">Recent purchases NFT</h2>

        <div>
          {userNFTArray.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="w-[300px] h-[300px] relative"
            >
              <Image src="/" alt="nft colletion item" fill />
            </div>
          ))}
          {/* nft1 */}

          {/* nft2 */}
          {/* nft3 */}
        </div>
      </div>
    </main>
  );
};

export default Page;
