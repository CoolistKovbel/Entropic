import mongoose from "mongoose";

interface ICollection {
  collectionName: string;
  collectionDescription: string;
  collectionContractAddress: string;
  banner: string;
  image: string;
  siteUrl: string;
  likes: number;
}

// TODO: Make it better......

const CollectionSchema = new mongoose.Schema<ICollection>(
  {
    collectionName: {
      type: String,
    },
    collectionDescription: {
      type: String,
    },
    collectionContractAddress: {
      type: String,
    },
    banner: {
      type: String,
    },
    image: {
      type: String,
    },
    siteUrl: {
      type: String,
    },
    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

let CollectionModel: mongoose.Model<ICollection>;

try {
  // Try to retrieve an existing model
  CollectionModel = mongoose.model<ICollection>("Collection");
} catch (e) {
  // If the model doesn't exist, define it
  CollectionModel = mongoose.model<ICollection>("Collection", CollectionSchema);
}

export const Collection = CollectionModel;
