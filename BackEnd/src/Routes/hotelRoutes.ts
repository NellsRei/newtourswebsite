import { Router } from "express";
import { addhotel, deletehotel, getallhotels, gethotel, getHotelByTour, updatehotel } from "../Controllers/hotelController";
import { verifyToken } from "../Middleware";

const hotelRoutes = Router()

hotelRoutes.post("",verifyToken, addhotel)
hotelRoutes.get("" ,getallhotels)
hotelRoutes.get("/:id",verifyToken ,gethotel)
hotelRoutes.patch("/:id",verifyToken ,updatehotel)
hotelRoutes.delete("/:id",verifyToken ,deletehotel)
// hotelRoutes.get("/T/:id",,getHotelByTour)


export default hotelRoutes