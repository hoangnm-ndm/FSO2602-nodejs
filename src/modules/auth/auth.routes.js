import { Router } from "express";
import { loginAuth, registerAuth } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerAuth);
authRouter.post("/login", loginAuth);

export default authRouter;
