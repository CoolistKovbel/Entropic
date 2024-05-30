"use client"

import { handleUserUpdate } from "@/app/lib/action";
import { useState } from "react";
import { useFormState } from "react-dom";


interface SettingsProps {
    user: any;
}

const Setting = ({user}:SettingsProps) => {

    const [loading, setLoading] = useState(false);
    const [userImage, setUserImage] = useState("");
  
    const [state, dispatch] = useFormState(handleUserUpdate, undefined);
  
    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true); // Set loading state to true
  
      const formData = new FormData(e.currentTarget);
      formData.append("userId", user)
  
      try {
        setTimeout(async () => {
          await dispatch(formData);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <section className="flex items-center gap-4">

      <form className="flex items-center flex-col bg-[#444] p-4 w-[80%]" onSubmit={handleClick}>
        <label
          htmlFor="username"
          className="flex items-center justify-between w-full"
        >
          <p className="text-xl">Username:</p>
          <input
            type="text"
            placeholder="change username"
            className="p-3 bg-[#000] rounded-lg"
            id="username"
            name="username"
          />
        </label>

        <button className="bg-[#000] p-3 rounded-lg hover:bg-[#999]">
          update
        </button>
      </form>

      <div className="flex items-center flex-col bg-[#444] p-4 w-[20%]">
        <h2>Current Account:</h2>
        <p>
          username: <span>{user}</span>
        </p>
      </div>

    </section>
  );
};

export default Setting;
