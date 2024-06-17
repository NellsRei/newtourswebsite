Use bookingSystem;

CREATE TABLE Hotels( 
    hotelid VARCHAR(255) PRIMARY KEY,
    hotelname VARCHAR(255),
    location VARCHAR(255),
    rating INT,
    tourid VARCHAR(255) FOREIGN KEY REFERENCES tour(tourid)
)
