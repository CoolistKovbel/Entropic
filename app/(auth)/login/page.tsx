import LoginForm from "@/app/components/login/login-form";
import LoginSign from "@/app/components/login/sign-login";
import React from "react";

const Page = () => {
  return (
    <main className="flex items-center flex-col justify-center w-full min-h-screen">
      <h2 className="text-2xl p-4 font-bold bg-[#222] w-full text-center mb-4">
        User Login
      </h2>

      <div className="flex items-center flex-col gap-4 p-10 bg-[#222]">
        <LoginForm />

        <LoginSign />
      </div>
    </main>
  );
};

export default Page;
