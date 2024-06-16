Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE addUser (
    @userid VARCHAR (255),
    @username VARCHAR(255), 
    @Email VARCHAR(255), 
    @Password VARCHAR(255),
    @role VARCHAR(10),
    @isDeleted INT,
    @isEmailSent INT
)

AS 
BEGIN
    INSERT INTO Users(userid,username,Email,Password,role, isDeleted, isEmailSent)
    VALUES(@userid, @username, @Email, @Password, @role, @isDeleted, @isEmailSent)

END
GO