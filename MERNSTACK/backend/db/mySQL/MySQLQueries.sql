CREATE DATABASE college;
CREATE DATABASE xyz_company;
CREATE DATABASE instgram;
DROP DATABASE xyz_company;

USE instgram;

SHOW DATABASES;
SHOW TABLES;

CREATE TABLE student(
rollNo INT,
name VARCHAR(30),
age INT
);

CREATE TABLE user(
id INT NOT NULL,
age INT CONSTRAINT CHECK (age>=13),
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT DEFAULT 0,
PRIMARY KEY(id)
);

CREATE TABLE posts(
id INT NOT NULL,
content VARCHAR(100),
user_id INT,
PRIMARY KEY(id),
FOREIGN KEY (user_id) REFERENCES user(id)
);
    
INSERT INTO student
VALUES (101,"Adma",35),
(101,"Anna",25);

INSERT INTO user VALUES 
(101,32,"Raj","raj25@gmail.com",2145,3652),
(102,13,"Raja","raja425@gmail.com",245,352),
(104,45,"Rajesh","rajesh9825@gmail.com",145,652),
(108,65,"Raju","raju5425@gmail.com",214,365),
(103,22,"Rama","ram25785@gmail.com",4145,36152);

INSERT INTO posts(id,content,user_id) VALUES
(125,"I Love India",101),
(126,"I Love India",104),
(127,"I Love India",101),
(128,"I Love India",103);

SELECT * FROM student;
SELECT * FROM user;

SELECT * FROM posts;