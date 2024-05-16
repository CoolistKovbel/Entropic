import Link from "next/link";
import LatestCollection from "./components/latestCollection/ltcColl";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-12">
      <div className="flex flex-col w-full">
        <header className="bg-[#222] p-12 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">Emurno</h1>

          <p className="text-[1rem]">
            Welcome to a small place where you are able to mint some cool nft
            collections from the user by the user. You will also be able to earn
            rewards and trade your nfts. Get started today!
          </p>
        </header>

        <nav className="flex items-center justify-between  p-10 bg-[#222] mt-10 rounded-lg">
          <Link href="/mint" className="bg-[#111] p-3 rounded-lg font-bold">
            latest mint
          </Link>
          <Link href="/latest" className="bg-[#111] p-3 rounded-lg font-bold">
            gallary
          </Link>
          <Link href="/contact" className="bg-[#111] p-3 rounded-lg font-bold">
            contact
          </Link>

          <nav className="p-2">
            <Link href="/login" className="bg-[#111] p-3 rounded-lg font-bold">
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
