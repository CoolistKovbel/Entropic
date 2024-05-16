import Link from "next/link";
import LatestCollection from "./components/latestCollection/ltcColl";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-12">


      <div className="flex flex-col w-full">
        <div className="flex items-center gap-5 flex-col ">
          <header className="bg-[#222] text-center p-4 rounded-lg w-full md:w-[60%]">
            <h1 className="text-4xl font-bold mb-2">Emurno</h1>

            <p className="text-[1rem]">
              Welcome to a small place where you are able to mint some cool nft
              collections from the user by the user. You will also be able to
              earn rewards and trade your nfts. Get started today!
            </p>
          </header>

          <div className="w-[300px] h-[300px] relative">
            <Image src="/slowlifeflame.png" alt="stupid" fill />
          </div>
        </div>

        <nav className="flex items-center gap-2 p-10 bg-[#222] mt-10 rounded-lg flex-col">
          <Link
            href="/mint"
            className="bg-[#111] p-3 rounded-lg font-bold  w-full md:w-full text-center md:text-left"
          >
            latest mint
          </Link>
          <Link
            href="/latest"
            className="bg-[#111] p-3 rounded-lg font-bold  w-full md:w-full text-center md:text-left"
          >
            gallary
          </Link>
          <Link
            href="/contact"
            className="bg-[#111] p-3 rounded-lg font-bold  w-full md:w-full text-center md:text-left"
          >
            contact
          </Link>

          <nav className="p-2 mt-4">
            <Link
              href="/login"
              className="bg-[#111] p-3 rounded-lg font-bold  w-full md:w-full text-center md:text-left"
            >
              Login
            </Link>
          </nav>
        </nav>
      </div>

      {/* Latest Collection */}
      <LatestCollection />

      
    </main>
  );
}
