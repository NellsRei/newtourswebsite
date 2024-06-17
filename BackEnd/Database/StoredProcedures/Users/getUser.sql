USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE getUser(@userid VARCHAR(255))
AS
BEGIN
    SELECT * FROM Users WHERE userid = @userid
END;
GO