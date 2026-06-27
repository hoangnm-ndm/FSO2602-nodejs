import mongoose from "mongoose";
import { optionSchema } from "../../shared/constants/optionSchema.js";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
    },
  },
  optionSchema
);

const Product = mongoose.model("Product", productSchema);
export default Product;
