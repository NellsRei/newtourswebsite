import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
import ejs from 'ejs'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


//creating a configuration object
let config = {
    host :"smtp.gmail.com",
    service : "gmail",
    port : 587 ,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
}

//creating a transporter
function createTransporter(config:any){
    return nodemailer.createTransport(config)
}

//send email
export async function sendEmail(messageOption:any){
    let transporter = createTransporter(config)
    await transporter.verify()
    await transporter.sendMail(messageOption, (err,info)=>{
        if (err){
            console.log(err)
        }
        console.log(info)
    })
}
