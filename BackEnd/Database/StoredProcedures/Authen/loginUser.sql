Use bookingSystem;
GO
CREATE OR ALTER PROCEDURE loginUser (@Email VARCHAR(255))

AS 
BEGIN
   SELECT * FROM Users WHERE Email = @Email

END
GO