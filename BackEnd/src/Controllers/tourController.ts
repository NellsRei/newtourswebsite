import { Request, Response } from "express";
import { v4 as uid } from "uuid";
import { DbHelper } from "../DatabaseHelper";
import { Tour } from "../Models/tourModel";

const dbInstance = new DbHelper()
// FOR ADDING A TOUR
export async function addTour(req:Request, res:Response){
    try {
      const tourid = uid()
      const {tourname,destination,description,price} = req.body
      
      dbInstance.exec('addTour',{tourid,tourname,destination,description,price})
      res.status(200).json({Message:"Tour added successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}
//FOR ALL TOURS
export async function getalltours(req:Request, res:Response){
    try {
        const tours= await(await (dbInstance.exec('getAllTours', {}))).recordset as Tour[]
        res.status(200).json(tours)
    } catch (error) {
        res.status(500).json(error)
    }
}
// FOR A SPECIFIC TOUR
export async function gettour(req:Request<{id : string}> , res:Response){
    try {
        const tour= await(await (dbInstance.exec('getTour', {tourid: req.params.id}))).recordset as Tour[]
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}

///UPDATING A TOUR
export async function updatetour(req:Request<{id : string}> , res:Response){
    try {
        const {tourname, destination, description, price} = req.body

        const tour = await(await(dbInstance.exec('updateTour', {tourid:req.params.id, tourname, destination,description,price})))
        res.status(200).json({Message:"Tour Updated Successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}
//DELETING A TOUR
export async function deletetour(req:Request<{id : string}> , res:Response){
    try {

        await(await(dbInstance.exec('deleteTour', {tourid:req.params.id})))
        res.status(200).json({Message:"Tour Deleted Successfully!!!"})
        // const tour = await (await dbInstance.query("SELECT * FROM tour WHERE tourid =`${tourid}`")).recordset as Tour[]
        // if (!tour[0].tourid){
        //     res.status(200).json({Message:"Tour Doesn't Exist"})
        // }

    } catch (error) {
        res.status(500).json(error)
    }
}