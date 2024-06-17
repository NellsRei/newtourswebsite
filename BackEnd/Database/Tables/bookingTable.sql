USE bookingSystem;

CREATE TABLE Booking(
    bookingid VARCHAR (255) PRIMARY KEY,
    userid VARCHAR (255) FOREIGN KEY REFERENCES Users(userid),
    tourid VARCHAR (255) FOREIGN KEY REFERENCES tour(tourid),
    hotelid VARCHAR (255) FOREIGN KEY REFERENCES Hotels(hotelid),
    bookingdate VARCHAR(255),    
)