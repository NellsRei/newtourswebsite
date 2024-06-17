Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE addTour ( 
    @tourid VARCHAR(255),
    @tourname VARCHAR(255),
    @destination VARCHAR(255),
    @description VARCHAR(255),
    @price INT
)
AS
BEGIN
    INSERT INTO tour(tourid,tourname,destination,description,price)
    VALUES(@tourid, @tourname, @destination, @description, @price)
END;
GO