USE bookingSystem;

CREATE TABLE Users(
    userid VARCHAR (255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    isEmailSent INT DEFAULT 0,
    role VARCHAR(10) DEFAULT 'User'
)