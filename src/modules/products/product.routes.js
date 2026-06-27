import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getDetailProduct,
  getProducts,
  updateProduct,
} from "./products.controller.js";

const productRouter = Router();
productRouter.get("/", getProducts);
productRouter.get("/:id", getDetailProduct);
productRouter.post("/", createProduct);
productRouter.patch("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
