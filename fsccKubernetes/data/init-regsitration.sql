CREATE DATABASE IF NOT EXISTS registration_db;

USE registration_db;
CREATE TABLE IF NOT EXISTS employees (
    id INT,  
    email VARCHAR(50), 
    first_name VARCHAR(50), 
    last_name VARCHAR(50),
    status VARCHAR(50),
    status_date VARCHAR(50),
    UNIQUE(email)
);