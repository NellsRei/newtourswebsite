USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE deleteTour(@tourid VARCHAR(255))
AS
BEGIN
    DELETE FROM tour WHERE tourid = @tourid
END;
GO