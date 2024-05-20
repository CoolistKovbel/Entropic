import mongoose from "mongoose";

interface IUser {
  username: string;
  useraccount: any;
  seacretPhase: string;
  email: string;
  secretSignature: string;
  image: string;
}

// TODO: Make it better......

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
    },
    seacretPhase: {
      type: String,
      unique: true
    },
    email: {
      type: String,
    },
    useraccount: {
      type: String
    },
    secretSignature: {
      type: String,
    },
    image: {
      type: String,
    },
    
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
