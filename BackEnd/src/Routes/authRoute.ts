import { Router } from "express";
import { addUser } from "../Controllers/authController";

const authRouter = Router()

authRouter.post("/register", addUser)
// authRouter.post("/login", loginUser)



export default authRouter