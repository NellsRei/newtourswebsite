import { Request, Response } from "express";
import { v4 as uid } from "uuid";
import Bycrypt from "bcrypt"
import { RegisterSchema } from "../Helper";
// import User from "../Models/userModel"
import { DbHelper } from "../DatabaseHelper";

const dbInstance = new DbHelper()
export function assignRoleBasedOnEmail(email: string): string {
    if (email.endsWith('@admin.com')) {
      return 'admin';
    }
    return 'user';
}
export function getUserDetails(){
    const signupbtn = document.getElementById("signupbtn")! as HTMLButtonElement
    signupbtn.addEventListener('click', (e)=>{
        e.preventDefault()
        const username = document.getElementById("name")
        const Email = document.getElementById("email")
        const password = document.getElementById("password") 
        
        return username,Email,password
    })
    
}

export async function addUser(req:Request, res:Response){
    try {
        const userid = uid()
        const {username, Email,Password,isDeleted,isEmailSent} = req.body
        const {error} = RegisterSchema.validate(req.body)
        if(error){
            return res.status(400).json(error.details[0].message)
        }
        // Automatically assign role based on email
        const role = assignRoleBasedOnEmail(Email);

        // Hash the password
        const hashedPassword = await Bycrypt.hash(Password,10);

        dbInstance.exec('addUser',{userid,username,Email,hashedPassword,isDeleted,isEmailSent,role})
        res.status(200).json({Message: "User Added Successfully"})
    } catch (error) {
        res.status(500).json(error)    
    }
}