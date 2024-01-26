Drop schema if exists `digimon`;
Create schema digimon;
use digimon;
create table teams(id_team int primary key auto_increment, nome varchar(25));
create table trainer (id_trainer int primary key auto_increment, nome varchar(25));
create table tipo (id_tipo int primary key auto_increment, nome varchar(15));
create table digimon (id_digimon int primary key auto_increment, nome varchar(20), tipo1 varchar(15), tipo2 varchar(15));

insert into `teams` (nome) values ("Equipa 1");
insert into `teams` (nome) values ("Equipa 2");
insert into `teams` (nome) values ("Equipa 3");

insert into `trainer`(nome) values ("Trainer 1");
insert into `trainer`(nome) values ("Trainer 2");
insert into `trainer`(nome) values ("Trainer 3");

insert into `tipo` (nome) values ("vaccine");
insert into `tipo` (nome) values ("data");
insert into `tipo` (nome) values ("virus");

insert into `tipo` (nome) values ("reptile");
insert into `tipo` (nome) values ("android");
insert into `tipo` (nome) values ("fire");
insert into `tipo` (nome) values ("vegetation");
insert into `tipo` (nome) values ("larva");
insert into `tipo` (nome) values ("machine");
insert into `tipo` (nome) values ("ghost");


insert into `digimon` (nome, tipo1, tipo2) values ("Agumon", "vaccine", "reptile");
insert into `digimon` (nome, tipo1, tipo2) values ("Andromon", "vaccine", "android");
insert into `digimon` (nome, tipo1, tipo2) values ("Candlemon", "data", "fire");
insert into `digimon` (nome, tipo1, tipo2) values ("Pteromon", "data", "Bird Dragon");
insert into `digimon` (nome, tipo1, tipo2) values ("Aruraumon", "data", "vegetation");
insert into `digimon` (nome, tipo1, tipo2) values ("DoKunemon", "virus", "larva");
insert into `digimon` (nome, tipo1, tipo2) values ("Datamon", "virus", "machine");
insert into `digimon` (nome, tipo1, tipo2) values ("Cherrymon", "virus", "vegetaion");
insert into `digimon` (nome, tipo1, tipo2) values ("Bakemon", "virus", "ghost");


GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'

