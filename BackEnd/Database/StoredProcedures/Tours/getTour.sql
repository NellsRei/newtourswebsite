USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE getTour(@tourid VARCHAR(255))
AS
BEGIN
    SELECT * FROM tour WHERE tourid = @tourid
END;
GO