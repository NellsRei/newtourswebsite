USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE deleteBooking(@bookingid VARCHAR(255))
AS
BEGIN
    DELETE FROM Booking WHERE bookingid = @bookingid
END;
GO