import Image from "next/image";
import React from "react";

const page = () => {
  const latest_collactions = [
    {
      collection_Name: "Pinote",
      collection_image: "/ephonite.png",
    },
    {
      collection_Name: "stupid",
      collection_image: "/ephonite.png",
    },
    {
      collection_Name: "stupid",
      collection_image: "/ephonite.png",
    },
  ];

  // lloop through collections.

  return (
    <section className="p-5">
      <header className="mb-4 bg-[#222] p-3">
        <h2 className="text-2xl font-bold">Latest Collection</h2>
        <p> ---- Collection</p>
      </header>

      <div className="w-full h-full flex items-center gap-4 flex-col md:flex-row gap-20">
        {latest_collactions.map((item) => (
          <div
            className="bg-[#222] w-[300px] h-[300px] text-center flex items-center justify-center relative"
            key={crypto.randomUUID()}
          >
            <h2 className="text-2xl absolute bottom-[-40px] left-0 w-full bg-[#222] p-2 hover:bg-[#444]">
              {item.collection_Name}
            </h2>

            <Image src={item.collection_image} alt="sad life" fill />
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
