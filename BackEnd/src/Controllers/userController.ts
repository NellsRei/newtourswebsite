import { Request, Response } from "express";
import { DbHelper } from "../DatabaseHelper";
import { User } from "../Models/userModel";


const dbInstance = new DbHelper
///For getting all users
export async function getallusers(req:Request, res:Response){
    try {
        const users = await(await dbInstance.exec('getallusers', {})).recordset as User []
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
    
}
///getting a specific user
export async function getuserbyid(req:Request<{id : string}> , res:Response){
    try {
        const user= await(await (dbInstance.exec('getUser', {userid: req.params.id}))).recordset as User[]
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}
///update userinfo
export async function updateUser(req:Request<{id : string}> , res:Response){
    try {
        const {username, Email, Password} = req.body
        const user = await(await(dbInstance.exec('updateUser', {userid:req.params.id, username, Email, Password})))
        res.status(200).json({Message:"Credentials Updated Successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETING A USER
export async function deleteuser(req:Request<{id : string}> , res:Response){
    try {
        // Check if the user exists
        const userExists = await dbInstance.exec('checkUserExists', { userid: req.params.id })
        
        if (!userExists.recordset.length) {
            return res.status(404).json({ Message: "User not found" })
        }

        // Update isDeleted to 1
        await dbInstance.exec('updateUserIsDeleted', { userid: req.params.id })


        res.status(200).json({Message:"User Deleted Successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}
