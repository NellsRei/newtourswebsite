Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE hotelByTour(@tourid VARCHAR (255))
AS 
BEGIN
    SELECT * FROM Hotels WHERE tourid = @tourid
END
GO
