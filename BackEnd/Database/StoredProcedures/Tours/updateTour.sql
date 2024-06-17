Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE updateTour( 
    @tourid VARCHAR(255),
    @tourname VARCHAR(255),
    @destination VARCHAR(255),
    @description VARCHAR(255),
    @price INT
)
AS 
BEGIN
    UPDATE tour SET tourname = @tourname, destination = @destination, description = @description, price = @price 
    WHERE tourid = @tourid
END
GO
