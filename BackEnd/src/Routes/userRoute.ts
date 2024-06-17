import { Router } from "express";
import { verifyToken } from "../Middleware";
import { deleteuser, getallusers, getuserbyid, updateUser } from "../Controllers/userController";

const userRoutes = Router()

userRoutes.get("",verifyToken,getallusers)
userRoutes.get("/:id",getuserbyid)
userRoutes.patch("/:id",updateUser)
userRoutes.delete("/:id",deleteuser)



export default userRoutes