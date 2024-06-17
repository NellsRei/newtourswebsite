Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE addUser (
    @userid VARCHAR (255),
    @username VARCHAR(255), 
    @Email VARCHAR(255), 
    @hashedpassword VARCHAR(255),
    @role VARCHAR(10)
)

AS 
BEGIN
    INSERT INTO Users(userid,username,Email,Password,role)
    VALUES(@userid, @username, @Email, @hashedpassword, @role)

END
GO