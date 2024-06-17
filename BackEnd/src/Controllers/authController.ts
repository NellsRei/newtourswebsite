import { Request, Response } from "express";
import { v4 as uid } from "uuid";
import Bycrypt from "bcrypt"
import { RegisterSchema } from "../Helper";
// import User from "../Models/userModel"
import { DbHelper } from "../DatabaseHelper";
import { Payload, User } from "../Models/userModel";
import jwt from "jsonwebtoken"



const dbInstance = new DbHelper()

export function assignRoleBasedOnEmail(email: string): string {
    if (email.endsWith('@admin.com')) {
      return 'admin';
    }
    return 'user';
}
export async function registerUser(req:Request, res:Response){
    try {
        const userid = uid()
        const {username, Email,Password} = req.body
        // console.log(userid,username,Email,Password);
        
        const {error} = RegisterSchema.validate(req.body)
        if(error){
            return res.status(400).json(error.details[0].message)
        }
        // Automatically assign role based on email
        const role = assignRoleBasedOnEmail(Email);

        // Hashes the password
        const hashedPassword = await Bycrypt.hash(Password,10);
        // console.log(hashedPassword,role)
        dbInstance.exec('addUser',{userid,username,Email,hashedPassword,role})
        res.status(200).json({Message: "User Added Successfully"})
    } catch (error) {
        res.status(500).json(error)    
    }
}

export const loginUser = async (req:Request, res:Response)=>{
    try {
        const {Email,Password}=req.body
        // console.log(`Received Email: ${Email}, Password: ${Password}`)
        const result = await dbInstance.exec('loginUser', {Email})
        // console.log('Database Query Result:', result)
        const user = result.recordset as User[]
        // console.log(user)
        // res.status(200).json(user)
        if(user[0].isDeleted === 1){
            return res.status(404).json({Message:"User doesn't exist.Sign in"})
        }
        if(user.length > 0){
            //validate password
            const isValid = await Bycrypt.compare(Password, user[0].Password)
                if(isValid){
                    const payload:Payload ={
                        Sub: user[0].userid,
                        Name: user[0].username,
                        role: user[0].role
                    }
                    const token = jwt.sign(payload,
                        process.env.SECRET as string,
                        {expiresIn:'2h'}
                    )

                    return res.status(201).json({Message:"Login Successfull!!!",token})
                }
                return res.status(400).json({Message:"Incorrect Credentials!!!"})
                            }
        
    } catch (error) {
        return res.status(500).json(error)
    }
}