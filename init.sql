--Create tables and load database from csv's
-- Assumes squirrelnest Database Exists
  --CREATE DATABASE squirrelnest;  command to create database, if needed.
-- Run this SQL file against squirrelnest database
  -- psql -U postgres     enter psql
  -- \l                   lists databases
  -- \c squirrelnest               connect to qas database
  -- \i init.sql   runs this script file
-- Using absolute value of file paths for import, change if necessary

--Clear Old Data and Tables

DROP TABLE IF EXISTS Users CASCADE;

DROP TABLE IF EXISTS Properties CASCADE;

DROP TABLE IF EXISTS Portfolios CASCADE;

DROP TABLE IF EXISTS Lenders CASCADE;

DROP TABLE IF EXISTS Deadlines CASCADE;

DROP TABLE IF EXISTS Transactions CASCADE;


CREATE SEQUENCE Users_seq;

CREATE TABLE Users (
	id varchar(255) NOT NULL DEFAULT NEXTVAL ('Users_seq'),
	portfolio BYTEA NOT NULL,
	PRIMARY KEY (id)
);


CREATE SEQUENCE Properties_seq;

CREATE TABLE Properties (
	id varchar(255) NOT NULL DEFAULT NEXTVAL ('Properties_seq'),
	address varchar(255) NOT NULL,
	units INT NOT NULL,
	occupancy INT NOT NULL,
	acquisitionPrice INT NOT NULL,
	marketValue INT NOT NULL,
	loanBalance INT NOT NULL,
	equity INT NOT NULL,
	owner INT NOT NULL,
	name varchar(255),
	city varchar(255),
	PRIMARY KEY (id)
);


CREATE SEQUENCE Portfolios_seq;

CREATE TABLE Portfolios (
	id varchar(255) NOT NULL DEFAULT NEXTVAL ('Portfolios_seq'),
	property varchar(255) NOT NULL,
	user varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE SEQUENCE Lenders_seq;

CREATE TABLE Lenders (
	id varchar(255) NOT NULL DEFAULT NEXTVAL ('Lenders_seq'),
	properties varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE SEQUENCE Deadlines_seq;

CREATE TABLE Deadlines (
	id varchar(255) NOT NULL DEFAULT NEXTVAL ('Deadlines_seq'),
	property varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE SEQUENCE Transactions_seq;

CREATE TABLE Transactions (
	id varchar(255) NOT NULL DEFAULT NEXTVAL ('Transactions_seq'),
	property varchar(255) NOT NULL,
	lender varchar(255) NOT NULL,
	amount DOUBLE PRECISION NOT NULL,
	account varchar(255) NOT NULL,
	category varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE Users ADD CONSTRAINT Users_fk0 FOREIGN KEY (portfolio) REFERENCES Portfolios(id);

ALTER TABLE Properties ADD CONSTRAINT Properties_fk0 FOREIGN KEY (owner) REFERENCES Users(id);

ALTER TABLE Portfolios ADD CONSTRAINT Portfolios_fk0 FOREIGN KEY (property) REFERENCES Properties(id);

ALTER TABLE Portfolios ADD CONSTRAINT Portfolios_fk1 FOREIGN KEY (user) REFERENCES Users(id);

ALTER TABLE Lenders ADD CONSTRAINT Lenders_fk0 FOREIGN KEY (properties) REFERENCES Properties(id);

ALTER TABLE Deadlines ADD CONSTRAINT Deadlines_fk0 FOREIGN KEY (property) REFERENCES Properties(id);

ALTER TABLE Transactions ADD CONSTRAINT Transactions_fk0 FOREIGN KEY (property) REFERENCES Properties(id);

ALTER TABLE Transactions ADD CONSTRAINT Transactions_fk1 FOREIGN KEY (lender) REFERENCES Lenders(id);







