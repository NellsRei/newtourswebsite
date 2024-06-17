USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE getAllBookings
AS
BEGIN
    SELECT * FROM Booking 
END;
GO