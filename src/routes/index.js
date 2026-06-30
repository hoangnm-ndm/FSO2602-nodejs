import { Router } from "express";
import productRouter from "../modules/products/products.routes.js";
import authRouter from "../modules/auth/auth.routes.js";

const router = Router();

router.use("/products", productRouter);
router.use("/auth", authRouter);

export default router;
