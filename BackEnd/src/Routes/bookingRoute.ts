import { Router } from "express";
import { addbooking, deleteBooking, getabookingbyuser, getallbookings, getallbookingsbyuser, updatebooking } from "../Controllers/bookingController";
import { verifyToken } from "../Middleware";

const bookingRoutes = Router()

bookingRoutes.post("", addbooking)
bookingRoutes.get("/:userid", getallbookingsbyuser)
bookingRoutes.get("/bid/:bid", getabookingbyuser)
bookingRoutes.patch("/:id", updatebooking)
bookingRoutes.delete("/:id", deleteBooking)
bookingRoutes.get("",verifyToken ,getallbookings)





export default bookingRoutes