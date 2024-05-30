import Setting from "@/app/components/settings/setting";
import { getSession } from "@/app/lib/action";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const user = await getSession();

  console.log(user)

  return (
    <main>
      <header className="bg-[#222] p-10  text-2xl flex items-center justify-between">
        <h2>Hello, {user.username}</h2>
        <div className="w-[200px] h-[200px] relative">
          <Image src={user.image as string} alt="slow life" fill />
        </div>
      </header>

      <Setting user={user.userId} iser={user.username} />
    </main>
  );
};

export default Page;
