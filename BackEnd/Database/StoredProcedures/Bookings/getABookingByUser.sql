USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE getABookingByUser(@bookingid VARCHAR(255))
AS
BEGIN
    SELECT * FROM Booking WHERE bookingid = @bookingid
END;
GO