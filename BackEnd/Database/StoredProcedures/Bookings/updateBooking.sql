Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE updateBooking( 
    @bookingid VARCHAR(255),
    @tourid VARCHAR(255),
    @hotelid VARCHAR(255),
    @bookingdate VARCHAR(255)
    
)
AS 
BEGIN
    UPDATE Booking SET tourid= @tourid, hotelid = @hotelid, bookingdate = @bookingdate
    WHERE bookingid = @bookingid
END
GO