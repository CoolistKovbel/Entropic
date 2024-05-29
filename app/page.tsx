
import LatestCollection from "./components/latestCollection/ltcColl";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-12">

      <div className="flex flex-col w-full">

        <div className="flex items-center gap-5 flex-col md:flex-row">

          <header className="bg-[#222] text-center p-4 rounded-lg w-full md:w-[60%]">
            <h1 className="text-[4rem] font-bold mb-2">Ephotopicup</h1>

            <p className="text-[1.0rem]">
              Welcome to a small place where you are able to mint some cool nft
              collections from the user by the user. You will also be able to
              earn rewards and trade your nfts. Get started today!
            </p>
          </header>

          <div className="w-[300px] h-[300px] relative">
            <Image src="/logo.png" alt="stupid" fill />
          </div>

        </div>

      </div>

      {/* Latest Collection */}
      <LatestCollection />

      
    </main>
  );
}
