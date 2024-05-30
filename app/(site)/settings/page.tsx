import Setting from "@/app/components/settings/setting";
import { getSession } from "@/app/lib/action";
import React from "react";

const Page = async () => {
  const user = await getSession();

  return (
    <main>
      <header className="bg-[#222] p-10  text-2xl">
        <h2>Hello, {user.username}</h2>
      </header>

      <Setting user={user.userId} />
    </main>
  );
};

export default Page;
