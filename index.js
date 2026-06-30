import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import connectDB from "./src/shared/config/database.js";
import { env } from "./src/shared/config/dotenv.js";

const app = express();

app.use(cors({}));

app.use(express.json());

app.use("/api", router);

connectDB();

app.listen(env.PORT, () => {
  console.log(`Server dang chay tren http://localhost:${env.PORT}`);
});
