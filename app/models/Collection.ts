import mongoose from "mongoose";

interface INFTListing {
  collectionName: string;
  collectionDescription: string;
  collectionContractAddress: string;
  banner: string;
  image: string;
  siteUrl: string;
  views: number;
  interests: number;
  holders: number;
  cost: number;
}

// TODO: Make it better......

const NFTListingSchema = new mongoose.Schema<INFTListing>(
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
    cost: {
      type: Number,
    },
    image: {
      type: String,
    },
    siteUrl: {
      type: String,
    },
    views: {
      type: Number,
    },
    interests: {
      type: Number,
    },
    holders: {
      type: Number,
    },
  },
  { timestamps: true }
);

let NFTListingModel: mongoose.Model<INFTListing>;

try {
  // Try to retrieve an existing model
  NFTListingModel = mongoose.model<INFTListing>("NFTListing");
} catch (e) {
  // If the model doesn't exist, define it
  NFTListingModel = mongoose.model<INFTListing>("NFTListing", NFTListingSchema);
}

export const NFTListing = NFTListingModel;
