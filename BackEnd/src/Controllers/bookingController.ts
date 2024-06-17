import { Request, Response } from "express";
import { DbHelper } from "../DatabaseHelper";
import { v4 as uid } from "uuid";
import { Booking } from "../Models/bookingModel";

const dbInstance = new DbHelper


//CREATING A BOOKING
export function addbooking(req:Request, res:Response){
    try {
        const bookingid = uid()
        const {userid, tourid, hotelid, bookingdate} = req.body

        dbInstance.exec('addBooking', {bookingid,userid,tourid,hotelid,bookingdate})
        res.status(200).json({Message:"Tour and Hotel booked successfully!!!"})
    } catch (error) {
        res.status(500).json(error)
    }
}
////GETTING ALL BOOKINGS BY ONE USER
export async function getallbookingsbyuser(req:Request<{userid : string}>, res:Response){
    try {
        const book= await(await (dbInstance.exec('getAllBookingbyUser', {userid: req.params.userid}))).recordset as Booking[]
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}
///GETTING A SINGLE BOOKING 
export async function getabookingbyuser(req:Request<{bid : string}>, res:Response){
    try {
        // console.log("Hi")
        const book= await(await (dbInstance.exec('getABookingByUser', {bookingid: req.params.bid}))).recordset as Booking[]
        // console.log(book)
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE A BOOKING
export async function updatebooking(req:Request<{id: string}>, res:Response){
    try {
        const {tourid, hotelid, bookingdate} = req.body
        const book= await(await (dbInstance.exec('updateBooking', {bookingid: req.params.id, tourid,hotelid,bookingdate})))
        res.status(200).json({Message: "Booking Updated Successfully"})
    } catch (error) {
        res.status(500).json(error) 
    }
}

//DELETE A BOOKING
export async function deleteBooking(req:Request<{id: string}>, res:Response){
    try {
        const book = await(await(dbInstance.exec('deleteBooking', {bookingid:req.params.id})))
        res.status(200).json({Message:"Booking Deleted Successfully!!!"}) 
    } catch (error) {
        res.status(500).json(error)  
    }
}

//VIEWING ALL BOOKINGS  (FOR ADMIN)
export async function getallbookings(req:Request, res:Response){
    try {
        const book= await(await (dbInstance.exec('getAllBookings', {}))).recordset as Booking []
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}