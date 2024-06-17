Use bookingSystem;
GO
---checks whether the user exists
CREATE PROCEDURE checkUserExists
    @userid VARCHAR(50)
AS
BEGIN
    SELECT 1
    FROM Users
    WHERE userid = @userid;
END
GO

-- Procedure to update isDeleted field
CREATE PROCEDURE updateUserIsDeleted
    @userid VARCHAR(50)
AS
BEGIN
    UPDATE Users
    SET isDeleted = 1
    WHERE userid = @userid;
END
GO