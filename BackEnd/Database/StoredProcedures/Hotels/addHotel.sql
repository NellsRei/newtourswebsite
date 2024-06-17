Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE addHotel ( 
    @hotelid VARCHAR(255),
    @hotelname VARCHAR(255),
    @location VARCHAR(255),
    @rating INT,
    @tourid VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Hotels(hotelid,hotelname,location,rating,tourid)
    VALUES(@hotelid, @hotelname, @location, @rating, @tourid)
END;
GO