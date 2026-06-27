import { connect } from "mongoose";
import { env } from "./dotenv.js";

const connectDB = async () => {
  try {
    await connect(env.DB_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Connect MongoDB failed!", error);
  }
};

export default connectDB;
