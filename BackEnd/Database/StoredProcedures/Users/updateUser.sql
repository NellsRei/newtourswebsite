Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE updateUser( 
    @userid VARCHAR (255),
    @username VARCHAR(255),
    @Email VARCHAR(255),
    @Password VARCHAR(255)
)
AS 
BEGIN
    UPDATE Users SET username = @username, Email = @Email, Password = @Password 
    WHERE userid = @userid
END
GO
