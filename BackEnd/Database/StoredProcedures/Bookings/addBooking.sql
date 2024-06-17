Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE addBooking ( 
    @bookingid VARCHAR(255),
    @userid VARCHAR(255),
    @tourid VARCHAR(255),
    @hotelid VARCHAR(255),
    @bookingdate VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Booking(bookingid,userid,tourid, hotelid, bookingdate)
    VALUES(@bookingid, @userid, @tourid, @hotelid, @bookingdate)
END;
GO