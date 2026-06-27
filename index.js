import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/shared/config/database.js";

const app = express();

app.use(express.json());

app.use(router);

connectDB();

app.listen(3000, () => {
  console.log("Server dang chay tren http://localhost:3000");
});
