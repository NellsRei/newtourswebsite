import { Request, Response } from "express";
import { v4 as uid } from "uuid";
import { DbHelper } from "../DatabaseHelper";
import { Hotel } from "../Models/hotelModel";



const dbInstance = new DbHelper()
// FOR ADDING A HOTEL
export function addhotel(req:Request, res:Response){
    try {
      const hotelid = uid()
      const {hotelname,location,rating,tourid} = req.body
      
      dbInstance.exec('addHotel',{hotelid, hotelname, location,rating,tourid})
      res.status(200).json({Message:"Hotel added successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}
//FOR ALL HOTELS
export async function getallhotels(req:Request, res:Response){
    try {
        const hotels= await(await (dbInstance.exec('getAllHotels', {}))).recordset as Hotel []
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    }
}
// FOR A SPECIFIC HOTEL
export async function gethotel(req:Request<{id : string}> , res:Response){
    try {
        const hotel= await(await (dbInstance.exec('getHotel', {hotelid: req.params.id}))).recordset as Hotel[]
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

///UPDATING A TOUR
export async function updatehotel(req:Request<{id : string}> , res:Response){
    try {
        const {hotelname, location, rating, tourid} = req.body

        const hotel = await(await(dbInstance.exec('updateHotel', {hotelid: req.params.id, hotelname, location, rating, tourid})))
        res.status(200).json({Message:"Hotel Updated Successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}
//DELETING A HOTEL
export async function deletehotel(req:Request<{id : string}> , res:Response){
    try {

        const hotel = await(await(dbInstance.exec('deleteHotel', {hotelid:req.params.id})))
        res.status(200).json({Message:"Hotel Deleted Successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}

//GETTING ALL HOTELS IN A TOUR
export async function getHotelByTour(req:Request<{id : string}> , res: Response){
    try {
        const hotel = await(await(dbInstance.exec('hotelByTour ',{id: req.params.id}))).recordset as Hotel[]

        if(hotel.length > 0){
            res.status(200).json(hotel)
    }
    } catch (error) {
        res.status(500).json(error)  
    }
}