import { Router } from "express";
import { getMe, loginAuth, registerAuth } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerAuth);
authRouter.post("/login", loginAuth);
authRouter.post("/me", getMe);

export default authRouter;
