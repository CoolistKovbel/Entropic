import LoginForm from "@/app/components/login/login-form";

const Page = () => {
  return (
    <main className="flex items-center flex-col justify-center w-full min-h-screen">

      <div className="text-2xl p-10 font-bold bg-[#222] rounded-lg drop-shadow-lg w-[300px text-center">

        <h2 className="w-full text-center mb-4 flex items-center justify-around">
          <span className="block text-4xl ">User Login </span>                       
        </h2>

        <div className="flex items-center flex-col gap-4 p-10 bg-[#222]">
          <LoginForm />
        </div>

      </div>


    </main>
  );
};

export default Page;
