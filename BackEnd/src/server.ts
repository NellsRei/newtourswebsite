import  express, { json } from "express";
import authRouter from "./Routes/authRoute";
import tourRoutes from "./Routes/tourRoutes";
import hotelRoutes from "./Routes/hotelRoutes";
import bookingRoutes from "./Routes/bookingRoute";
import userRoutes from "./Routes/userRoute";


const app = express()

//middleware
app.use(json())

app.use("/user", authRouter)
app.use("/tour", tourRoutes)
app.use("/hotel", hotelRoutes)
app.use("/booking", bookingRoutes)
app.use("/users", userRoutes)



//port
app.listen(3005, ()=>{
    console.log('Server Running....');
    
})