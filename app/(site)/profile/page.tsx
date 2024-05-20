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

      {userr.isLoggedIn && (
        <HandleProfile />
      )}

      <h2 className="text-2xl">Profile Page</h2>

      <div>

        {/* user add */}
        <h2 className="text-2xl">{userProfile.userAddress}</h2>

        {/* image */}
        <div className="w-[300px] h-[300px] relative">
          <Image
            src={userProfile.userProfileImage}
            alt="nft collection item"
            fill
          />
        </div>

        <div className="text-sm p-4">
          <p className="text-lg uppercase">Amount own: 0</p>
          <p className="text-lg uppercase">Total Value: 0</p>
          <p className="text-lg uppercase">trades: 0</p>
          <p className="text-lg uppercase">TrustScore: 0</p>
        </div>

      </div>

      <div>

        <h2 className="text-3xl">
          Recent purchases NFT amount {userNFTArray.length}
        </h2>

        <div className="p-3 bg-[#222]">
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
