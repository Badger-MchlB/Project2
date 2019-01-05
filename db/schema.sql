CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes(
    id INT AUTO_INCREMENT NOT NULL,
    notes_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN NOT NULL default 0,
    PRIMARY KEY (id)
);