import { grabLatestCollections } from "@/app/lib/action";
import Image from "next/image";
import Link from "next/link";


const page = async () => {
  const latest_collactions = await grabLatestCollections();

  // lloop through collections.

  // latest_collactions?.map((item:any) => console.log(item.collectionName))

  return (
    <section className="p-5">

      <header className="mb-4 bg-[#222] p-3 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Latest Collection</h2>
        <p> {latest_collactions?.length} Collection</p>
      </header>

      <div className="w-full h-full flex items-center gap-4 flex-col md:flex-row gap-20">
        {latest_collactions?.map((item:any) => (
          <div
            className="bg-[#222] w-[300px] h-[300px] text-center flex items-center justify-center relative flex-col md:flex-row mb-10 "
            key={crypto.randomUUID()}
          >
            
            <h2 className="text-2xl absolute bottom-[-40px] left-0 w-full bg-[#222] p-2 hover:bg-[#444]">
              <Link href={`/mint/${item._id}`}>{item.collectionName}</Link>
            </h2>

            <Image src={item.image} alt="sad life" fill />

          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
