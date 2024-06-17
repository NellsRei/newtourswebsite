USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE deleteHotel(@hotelid VARCHAR(255))
AS
BEGIN
    DELETE FROM Hotels WHERE hotelid = @hotelid
END;
GO