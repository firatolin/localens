import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true },
    name: String,
    avatar: String,
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
