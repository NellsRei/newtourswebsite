USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE getHotel(@hotelid VARCHAR(255))
AS
BEGIN
    SELECT * FROM Hotels WHERE hotelid = @hotelid
END;
GO