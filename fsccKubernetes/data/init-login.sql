CREATE DATABASE IF NOT EXISTS login_db;

USE login_db;
CREATE TABLE IF NOT EXISTS users (
    id INT,
    email VARCHAR(50),
    password VARCHAR(60),
    loggedin VARCHAR(50),
    UNIQUE(email)
);

insert into users (id, email, password) values (1, 'admin@developer.com', '$2a$10$PSutxF8kg65/RRh61gl1q.WI8kS.Gzd.rK0EDpR4QSqW7anpPgTfG', true);