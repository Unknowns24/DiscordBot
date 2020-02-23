CREATE DATABASE IF NOT EXISTS unk_bot;
USE unk_bot;

CREATE TABLE `servers`(
    id INT(4) AUTO_INCREMENT NOT NULL, 
    guild BIGINT(19) NOT NULL, 
    aproved INT(1) NOT NULL DEFAULT 0,
    LicenseUsed VARCHAR(30) NOT NULL,
    joinedDate TIMESTAMP DEFAULT CURRENT_TIME,

    PRIMARY KEY(`id`)
);

CREATE TABLE `licenses`(
    id INT(4) AUTO_INCREMENT NOT NULL, 
    license VARCHAR(30) NOT NULL, 
    inUse INT(1) NOT NULL DEFAULT 0,
    useByGuild BIGINT(19) NOT NULL, 
    useDate INT(12) NOT NULL DEFAULT 0,

    PRIMARY KEY(`id`)
);

CREATE TABLE `svConfig`(
    guild BIGINT(19) NOT NULL, 
    welcomeChannel VARCHAR(19) NOT NULL, 
    welcomeRole VARCHAR(20) NOT NULL,

    PRIMARY KEY(`guild`)
);