import ejs from "ejs";
import { DbHelper } from "../DatabaseHelper";
import { sendEmail } from "../Helper";

const dbInstance = new DbHelper();

export interface User {
    userid: string;
    username: string;
    Email: string;
    Password: string;
    isDeleted: number;
    isEmailSent: number;
    role: string;
}

export interface Booking {
    bookingid: string,
    userid: string,
    tourid: string,
    hotelid: string,
    bookingdate: string,
    isEmailSent:number
}

export interface Tour {
    tourid: string,
    tourname: string,
    destination: string,
    description: string,
    price: string,
}

export interface Hotel {
    hotelid: string,
    hotelname: string,
    location: string,
    rating: number,
    tourid: string,
}

export async function run() {
    try {
        const users = (await dbInstance.query("SELECT * FROM Users WHERE isEmailSent = 0;")).recordset as User[]

        for (const user of users) {
            try {
                const data = await ejs.renderFile("Template/register.ejs", { name: user.username })
                console.log(data)

                const messageOption = {
                    to: user.Email,
                    from: process.env.EMAIL,
                    subject: "Welcome to Voyage Vista, Explore The World With Ease",
                    html: data
                }

                await sendEmail(messageOption)

                await dbInstance.query(`UPDATE Users SET isEmailSent = 1 WHERE userid='${user.userid}'`)
            } catch (err) {
                console.error(`Error processing user ${user.userid}:`, err)
            }
        }
    } catch (error) {
        console.log("Error querying users:", error)
    }
}

export async function bookingemail(bookingid: string) {
    try {
        const booking = (await dbInstance.query(`SELECT * FROM Booking WHERE isEmailSent = 0`)).recordset as Booking[]
        if (booking.length === 0) {
            console.log(`No booking found with bookingid: ${bookingid}`);
            return
        }

        const book = booking[0]

        const user = (await dbInstance.query(`SELECT * FROM Users WHERE userid='${book.userid}'`)).recordset as User[]
        if (user.length === 0) {
            console.log(`No user found with userid: ${book.userid}`);
            return
        }

        const tour = (await dbInstance.query(`SELECT * FROM Tour WHERE tourid='${book.tourid}'`)).recordset as Tour[]
        if (tour.length === 0) {
            console.log(`No tour found with tourid: ${book.tourid}`)
            return
        }

        const hotel = (await dbInstance.query(`SELECT * FROM Hotels WHERE hotelid='${book.hotelid}'`)).recordset as Hotel[]
        if (hotel.length === 0) {
            console.log(`No hotel found with hotelid: ${book.hotelid}`)
            return
        }

        try {
            const data = await ejs.renderFile("Template/bookingemail.ejs", {
                bookingid: book.bookingid,
                username: user[0].username,
                tourname: tour[0].tourname,
                hotelname: hotel[0].hotelname,
                bookingdate: book.bookingdate
            })
            console.log(data)

            const messageOption = {
                to: user[0].Email,
                from: process.env.EMAIL,
                subject: "Booking Confirmation - Voyage Vista",
                html: data
            }

            await sendEmail(messageOption)
            await dbInstance.query(`UPDATE Booking SET isEmailSent=1 WHERE bookingid='${book.bookingid}'`)
        } catch (err) {
            console.error(`Error rendering email for booking ${book.bookingid}:`, err)
        }
    } catch (error) {
        console.log("Error querying booking:", error)
    }
}
