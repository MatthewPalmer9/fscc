CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;
CREATE TABLE IF NOT EXISTS employees (
    id INT, 
    userid VARCHAR(50), 
    email VARCHAR(50), 
    password VARCHAR(60), 
    address VARCHAR(50), 
    city VARCHAR(50), 
    state VARCHAR(50), 
    zip VARCHAR(50), 
    cell_phone VARCHAR(50), 
    home_phone VARCHAR(50), 
    first_name VARCHAR(50), 
    last_name VARCHAR(50), 
    UNIQUE(email)
);