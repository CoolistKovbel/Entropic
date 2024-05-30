"use server";

import { getIronSession } from "iron-session";
import { User } from "../models/User";

import { sendMail } from "./mail";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";
import { cookies } from "next/headers";
import dbConnect from "./db";
import { redirect } from "next/navigation";
import { writeFile } from "fs/promises";
import { NFTListing } from "../models/Collection";
import { revalidatePath } from "next/cache";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

const hadleImageUpload = async (image: any) => {
  const fileBuffer = await (image as File).arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const path = `${process.cwd()}/public/nftImages/${
    crypto.randomUUID() + image.name
  }`;

  await writeFile(path, buffer);

  return path.split(`${process.cwd()}/public`)[1];
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
  const { currentUserAccount, signature } = formData;

  try {
    // Connect to the database
    await dbConnect();

    // Check if the user already exists
    const userExist = await User.findOne({ username: currentUserAccount });

    if (userExist) {
      // Create a session for the new user
      const session = await getSession();

      session.userId = userExist._id.toString();
      session.username = userExist.username;
      session.email = userExist.email as string;
      session.currentUserBlockAccount = userExist.useraccount;
      session.isLoggedIn = true;

      await session.save();

      return { status: "new", session };
    } else {
      // If user does not exist, create a new user
      const user = new User({
        secretSignature: signature,
        username: currentUserAccount,
      });

      const account = await user.save();

      // Create a session for the new user
      const session = await getSession();
      session.userId = user._id.toString();
      session.username = user.username;
      session.email = user.email as string;
      session.isLoggedIn = true;

      return { status: "new", account };
    }
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
}

export async function handleNftScrape() {
  try {
    console.log("stppid");
  } catch (error) {
    console.log("error");
  }
}

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

// Handle user listing nft from server
export async function handleNFTListing(formData: FormData) {
  const { name, description, address, cost, contractABI } =
    Object.fromEntries(formData);

  try {
    await dbConnect();

    const imagePa = formData.get("imageBanner") as File;

    const rest = await hadleImageUpload(imagePa);

    const payload = [
      {
        collectionName: name as string,
        collectionDescription: description as string,
        collectionContractAddress: address as string,
        cost: Number(cost),
        image: rest as string,
        contractABI: contractABI as string,
      },
    ];

    console.log("grabbing nft data from user", payload);

    // Listing NFT
    const collection = new NFTListing({
      collectionName: name as string,
      collectionDescription: description as string,
      collectionContractAddress: address as string,
      cost: Number(cost),
      image: rest as string,
      contractABI: contractABI as string,
    });

    const boool = await collection.save();

    console.log(boool);

    // Client input data
    // console.log(payload);

    return "ok";
  } catch (error) {
    console.log(error);
  }
}

// Grab single latest collection
export const grabLatestCollections = async () => {
  try {
    await dbConnect();

    const gg = await NFTListing.find();

    return gg;
  } catch (error) {
    console.log("error");
  }
};

// Handle grabbing lasted listed collection
export const grabRecentCollection = async () => {
  try {
    await dbConnect();

    const gg = await NFTListing.find().sort({ createdAt: -1 });
    console.log("all the collections", gg);
    return gg;
  } catch (error) {
    console.log("error");
  }
};

// Handle grabing ths specfic contrac t addreass
export const getSpecfocContractDatra = async (contractAddress: any) => {
  try {
    console.log("STUPID");

    await dbConnect();

    const document = await NFTListing.findById(contractAddress);

    if (!document) {
      throw new Error("Document not found");
    }

    return [document];
  } catch (error) {
    console.log(error);
    return "error grabbing contract";
  }
};

// Handle
export const handleInterestToggle = async (
  contractAddress: any,
  userId: any
) => {
  const user = await getSession();

  try {
    await dbConnect();

    if (!user.isLoggedIn) {
      return "Need to be logged in";
    }

    console.log(
      "Processing interest toggle for - id",
      contractAddress,
      userId.userId
    );

    const document = await NFTListing.findOne({
      _id: contractAddress,
    });

    // Toggle userId in interests array
    const userIdIndex: any = document?.interests.indexOf(userId.userId);
    if (userIdIndex === -1) {
      // Add userId to interests if it's not already included
      document?.interests.push(userId.userId);
    } else {
      // Remove userId from interests if it's already included
      document?.interests.splice(userIdIndex, 1);
    }

    // Save the updated document
    await document?.save();

    revalidatePath(`/mint/${contractAddress}`);

    return JSON.stringify(document);
  } catch (error) {
    console.error(error);
    console.log("Error processing interest toggle");
    throw new Error("Error processing interest toggle");
  }
};

export const handleUserUpdate = async (
  state: string | any,
  formData: FormData
) => {
  const { userId, ...updatedFields } = Object.fromEntries(formData.entries());
  try {
    await dbConnect();
    const userData = await getSession();
    let rest: any;

    console.log(updatedFields.profileImage, userId);

    // Find the user by userId
    const user: any = await User.findOne({ _id: userId });

    if (!user) {
      console.log("User not found");
      return;
    }

    if (typeof updatedFields.profileImage !== "undefined") {
      const fileBuffer = await (
        updatedFields.profileImage as File
      ).arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      // set path
      const path = `${process.cwd()}/public/profileImages/${
        crypto.randomUUID() + updatedFields.profileImage.name
      }`;

      // Write image
      await writeFile(path, buffer);
      rest = path.split(`${process.cwd()}/public`)[1];
    }

    for (const [key, value] of Object.entries(updatedFields)) {
      if (value !== "" && value !== undefined && value !== null) {
        user[key] = value;
      }
    }

    // Update session data
    if (userData) {
      if (updatedFields.username) {
        userData.username = updatedFields.username as string;
      }
      if (rest) {
        userData.image = rest;
      }

      await userData.save();
    }

    await user.save();

    revalidatePath("/settings");

    console.log("User updated successfully:", user);
  } catch (error) {
    console.log(error);
  }
};

export const handleUserViewCounter = async (contractAddress: any) => {
  try {
    await dbConnect();

    const document = await NFTListing.findById(contractAddress);

    if (!document) {
      throw new Error("Document not found");
    }

    // Increment views
    document.views++;

    // Save the updated document
    await document.save();
  } catch (error) {
    console.log(error);
  }
};
