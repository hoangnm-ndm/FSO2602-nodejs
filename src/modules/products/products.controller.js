import Product from "./product.model.js";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailProduct = async (req, res) => {};
export const createProduct = async (req, res) => {
  try {
    // ! Validate data
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      message: "Create product successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
