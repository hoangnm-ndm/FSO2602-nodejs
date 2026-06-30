import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../users/users.model.js";
import { env } from "../../shared/config/dotenv.js";

export const registerAuth = async (req, res) => {
  const { email, password } = req.body;
  // 1. Validate data
  // 2. Check email exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({
      message: "A failed to register",
    });
  }
  // 3. Hash password by bcrypt

  const hashPassword = await bcrypt.hash(password, 10);
  // 4. Create user
  const user = await User.create({
    ...req.body,
    password: hashPassword,
  });
  // 5. Return response

  user.password = undefined; // remove password from response
  res.status(201).json({
    message: "Register successfully",
    data: user,
  });
};

export const loginAuth = async (req, res) => {
  const { email, password } = req.body;
  // 1. Validate data
  // 2. Check email exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Email or password is incorrect",
    });
  }
  // 3. Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Email or password is incorrect",
    });
  }
  // 4. Return response
  const accessToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    env.JWT_SECRET,
    {
      expiresIn: "1d",
      // * 1s, 1ms, 1m, 1h, 1d, (1000*60*60*24)
    }
  );

  user.password = undefined; // remove password from response
  res.status(200).json({
    message: "Login successfully",
    data: user,
    accessToken,
  });
};
