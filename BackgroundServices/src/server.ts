import express from 'express';
import cron from 'node-cron';
import { run, bookingemail } from './EmailServices';
import { DbHelper } from './DatabaseHelper';

const app = express()
const dbInstance = new DbHelper()

async function fetchBookingIds(): Promise<string[]> {
    const result = await dbInstance.query("SELECT bookingid FROM Booking WHERE isEmailSent = 0")
    return result.recordset.map((record: { bookingid: string }) => record.bookingid)
}

cron.schedule('*/10 * * * * *', async () => {
    try {
        await run();

        const bookingIds = await fetchBookingIds()
        for (const bookingid of bookingIds) {
            await bookingemail(bookingid);
        }
    } catch (error) {
        console.error(error)
    }
})

app.listen(1001, () => {
    console.log('Server running...')
})
