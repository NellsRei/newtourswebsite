USE bookingSystem;
GO
CREATE OR ALTER PROCEDURE deleteUser(@userid VARCHAR(255))
AS
BEGIN
    DELETE FROM Users WHERE userid = @userid
END;
GO