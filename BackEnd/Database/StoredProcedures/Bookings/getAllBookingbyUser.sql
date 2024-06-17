USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE getAllBookingbyUser(@userid VARCHAR(255))
AS
BEGIN
    SELECT * FROM Booking WHERE userid = @userid 
END;
GO