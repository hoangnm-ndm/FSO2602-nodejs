export const getProducts = async (req, res) => {
  try {
    console.log("get products successfully!");
    // ! Truy vấn  vào database.
    // trả lời client
    return res.status(200).json({
      message: "Lay san pham thanh cong!",
      data: [
        {
          id: 1,
          name: "iphone",
          price: 200,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailProduct = async (req, res) => {};
export const createProduct = async (req, res) => {};
export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
