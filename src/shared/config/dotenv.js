import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/mydatabase",
  NODE_ENV: process.env.NODE_ENV || "development",
};
