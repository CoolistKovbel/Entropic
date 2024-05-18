import mongoose from "mongoose";

interface IUser {
  username: string;
  seacretPhase: string;
  secretKey: string;
  secretSignature: string;
  image: string;
}

// TODO: Make it better......

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      min: 4,
      max: 24,
      require: true,
      unique: true
    },
    seacretPhase: {
      type: String,
      require: true,
      unique: true
    },
    secretKey: {
      type: String,
      require: true,
    },
    secretSignature: {
      type: String,
      require: true,
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
