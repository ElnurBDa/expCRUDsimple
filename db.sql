create database DATABASE_NAME;
use DATABASE_NAME;

create table users (
    id int not null auto_increment,
    username varchar(255) not null,
    surname varchar(255) not null,
    department varchar(255) not null,
    password varchar(255) not null,
    user_type varchar(255) not null,
    primary key (id)
);

insert into users (username, surname, department, password, user_type) 
values ('SMN1', 'ANYN1', 'IT', '123', 'admin'),
('SMN2', 'ANYN2', 'SETEM', '123', 'user');