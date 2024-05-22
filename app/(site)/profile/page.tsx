import { getSession } from "@/app/lib/action";
import Image from "next/image";
import HandleProfile from "./handleProfile";

const Page = async () => {
  const userr = await getSession();

  const userProfile = {
    userAddress: userr.username?.substring(0, 8) || null,

    userProfileImage: "/ephonite.png",
  };

  const userNFTArray = [
    {
      image: "1",
      ipfs: "/entropic-item.png",
    },
  ];

  return (
    <main className="p-10 bg-[#444]">
      {userr.isLoggedIn && <HandleProfile />}
      <header className="bg-[#222] p-4 flex items-center justify-between w-full mb-4">

        <h2 className="text-2xl">My Profile</h2>
          {/* user add */}
        <h2 className="text-2xl">{userProfile.userAddress}</h2>

      </header>

      <div className="flex flex-col md:flex-row bg-[#222] p-4 rounded-lg justify-center">
        {/* image */}
        <div className="w-[300px] h-[300px] relative">
          <Image
            src={userProfile.userProfileImage}
            alt="nft collection item"
            fill
          />
        </div>

        <div className="text-sm p-4 flex flex-col gap-4 drop-shadow-lg">
          <p className="text-lg uppercase p-2 bg-[#444]">Amount own: 0</p>
          <p className="text-lg uppercase p-2 bg-[#444]">Total Value: 0</p>
          <p className="text-lg uppercase p-2 bg-[#444]">trades: 0</p>
          <p className="text-lg uppercase p-2 bg-[#444]">TrustScore: 0</p>
        </div>

      </div>

      <div className="p-10">
        <h2 className="text-4xl font-bold mb-4">
          Recent purchases NFT amount {userNFTArray.length}
        </h2>

        <div className="p-3 bg-[#222] rounded-lg">
          {userNFTArray.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="w-[300px] h-[300px] relative"
            >
              <Image src="/" alt="nft colletion item" fill />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
