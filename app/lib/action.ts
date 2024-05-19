"use server";

import { getIronSession } from "iron-session";
import { User } from "../models/User";

import { sendMail } from "./mail";
import { SessionData, sessionOptions } from "./dictionary";
import { cookies } from "next/headers";
import dbConnect from "./db";

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

    return { message: "slow life" };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

export async function handleLogin(formData: any) {
  const { userAddress, currentUserAccount, signature } = formData;
  try {
    await dbConnect();

    const userExist = await User.find({ useraccount: currentUserAccount });

    if (userExist.length) return "you already createded one stupid";
    
    let user: any;

    if (userExist.length === 0) {
      user = new User({
        secretSignature: signature as string,
        username: currentUserAccount as string,
      });

      const account = await user.save();

      return account;
    } else {
      console.log(userExist, "there is user");
    }

    // okooo
  } catch (error) {
    console.log(error);
    return "error signing in";
  }
}
