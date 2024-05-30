import LatestCollection from "./components/latestCollection/ltcColl";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-12">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-5 flex-col md:flex-row justify-around">
          <header className="bg-[#222] text-center p-10 rounded-lg w-full md:w-[60%]">
            <h1 className="text-[3rem] font-bold mb-2">Ephotopicup</h1>

            <p className="text-[1.0rem]">
              Welcome to a site where you are able to list any type of nft
              collection to be able to be able to attract more art ethusiate.
            </p>
          </header>

          <div className="w-[300px] h-[300px] relative">
            <Image src="/logov2.png" alt="stupid" fill />
          </div>
        </div>
      </div>

      {/* Latest Collection */}
      <LatestCollection />
    </main>
  );
}
