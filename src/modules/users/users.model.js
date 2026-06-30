import mongoose from "mongoose";
import { optionSchema } from "../../shared/constants/optionSchema.js";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "manager", "admin", "super-admin"],
      default: "user",
    },
  },
  optionSchema
);

const User = mongoose.model("User", userSchema);

export default User;
