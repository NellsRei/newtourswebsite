import { Router } from "express";
import { addTour, deletetour, getalltours, gettour, updatetour } from "../Controllers/tourController";
import { verifyToken } from "../Middleware";


const tourRoutes = Router()

tourRoutes.post("", verifyToken, addTour)
tourRoutes.get("", getalltours)
tourRoutes.get("/:id",verifyToken, gettour)
tourRoutes.patch("/:id",verifyToken, updatetour)
tourRoutes.delete("/:id", verifyToken,deletetour)

export default tourRoutes