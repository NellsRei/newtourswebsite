import  express, { json } from "express";
import authRouter from "./Routes/authRoute";


const app = express()

//middleware
app.use(json())

app.use("/user", authRouter)

//port
app.listen(3005, ()=>{
    console.log('Server Running....');
    
})