"use server";

import { User } from "../models/User";
import dbConnect from "./db";
import { sendMail } from "./mail";


export async function RegisterUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await dbConnect();

    const { username} =
      Object.fromEntries(formData);



    return "Authentication success " + username;
  } catch (error) {
    console.log(error);
    return "error im sorry but this entire form";
  }
}

const hadleImageUpload = async (image: any) => {
  const fileBuffer = await (image as File).arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const path = `${process.cwd()}/public/blogheaders/${
    crypto.randomUUID() + image.name
  }`;

  await writeFile(path, buffer);

  return path.split(`${process.cwd()}/public/`)[1];
};


export async function ContactEmail(
  id: string,
  prevState: string | object | undefined,
  formData: FormData
) {
  try {
    const data = Object.fromEntries(formData.entries());


    const { to, name, subject, content } = data;

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: name as string, // get user name
      subject: subject as string,
      content: content as string,
    });

    return { message: "i am dead" };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}


export async function handleLogin(formData: FormData) {}