import { Payload } from "../Models/userModel"
import { NextFunction, Request, Response} from "express";
import jws from "jsonwebtoken" 


export interface ExtendedRequest extends Request{
    info? :Payload
}

export function verifyToken(req:ExtendedRequest, res:Response,next:NextFunction){
    try {
        //read token
        const token = req.headers['token'] as string

        //check token
        if(!token){
            return res.status(401).json({message:"Forbidden"})
        }
        const decodeData = jws.verify(token, process.env.SECRET as string) as Payload

        //checking if user is admin or not
        if(decodeData.role !== 'admin'){
            return res.status(401).json({message:"Not an Admin"}) 
        }
        req.info = decodeData
        next()
    } catch (error) {
        res.status(500).json(error)
    }
    
}