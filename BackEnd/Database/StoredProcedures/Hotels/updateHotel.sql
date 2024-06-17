Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE updateHotel( 
    @hotelid VARCHAR(255),
    @hotelname VARCHAR(255),
    @location VARCHAR(255),
    @rating INT,
    @tourid VARCHAR(255)
)
AS 
BEGIN
    UPDATE Hotels SET hotelname = @hotelname, location = @location, rating = @rating, tourid = @tourid
    WHERE hotelid = @hotelid
END
GO
