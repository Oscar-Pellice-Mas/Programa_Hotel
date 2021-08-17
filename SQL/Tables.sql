drop database if exists HotelManagement;
create database HotelManagement;
use HotelManagement;

drop table if exists material_used cascade;
drop table if exists material_required cascade;
drop table if exists revision cascade;
drop table if exists material cascade;
drop table if exists upgrade cascade;
drop table if exists issue cascade;
drop table if exists user cascade;
drop table if exists hotel cascade;

create table hotel(
    `id` VARCHAR(255),
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `mail` VARCHAR(255) NOT NULL DEFAULT '',
    `phone` VARCHAR(255) NOT NULL DEFAULT '',
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table user(
    `id` VARCHAR(128),
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `role` int(11),
    `id_hotel` VARCHAR(128) NOT NULL DEFAULT '',
    primary key (`id`),
    foreign key (`id_hotel`) references hotel (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


create table issue(
    `id` VARCHAR(128) NOT NULL DEFAULT '',
    `room` VARCHAR(255) NOT NULL DEFAULT '',
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `description` text,
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    `status` int(11) NOT NULL DEFAULT 0,
    `id_hotel` VARCHAR(128) NOT NULL DEFAULT '',
    `id_reporter` VARCHAR(128) NOT NULL DEFAULT '',
    `category` varchar(255) NOT NULL,
    `subcategory`  text,
    `priority` int(11),
    `date` date not null,
    primary key (`id`),
    foreign key (`id_hotel`) references hotel (`id`),
    foreign key (`id_reporter`) references user (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table material(
    `id` VARCHAR(128) NOT NULL DEFAULT '',
    `id_hotel` VARCHAR(128) NOT NULL DEFAULT '',
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `quantity` int(11) not null default 0,
    `price` float not null default 0.0,
    `average` text, -- es guarda preu mitja
    primary key (`id`),
    foreign key (`id_hotel`) references hotel (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table material_used(
    `id_issue`VARCHAR(128) NOT NULL DEFAULT '',
    `id_material` VARCHAR(128) NOT NULL DEFAULT '',
    `quantity` int(11) NOT NULL,
    primary key (`id_issue`, `id_material`),
    foreign key (`id_issue`) references issue (`id`),
    foreign key (`id_material`) references material (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table material_required(
    `id_issue` VARCHAR(128) NOT NULL DEFAULT '',
    `id_material` VARCHAR(128) NOT NULL DEFAULT '',
    `quantity` int(11) NOT NULL,
    primary key (`id_issue`, `id_material`),
    foreign key (`id_issue`) references issue (`id`),
    foreign key (`id_material`) references material (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table revision(
    `id` VARCHAR(128) NOT NULL DEFAULT '',
    `id_hotel` VARCHAR(128) NOT NULL DEFAULT '',
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `description` text,
    `date` date not null,
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    `next` date,
    primary key (`id`),
	foreign key (`id_hotel`) references hotel (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table upgrade(
    `id` VARCHAR(128) NOT NULL DEFAULT '',
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `id_hotel` VARCHAR(128) NOT NULL DEFAULT '',
    `id_reporter` VARCHAR(128) NOT NULL DEFAULT '',
    `description` int(11) not null default 0,
    `date` date not null,
    `status` int(11) NOT NULL DEFAULT 0,
    `room` VARCHAR(255) NOT NULL DEFAULT '',
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    primary key (`id`),
	foreign key (`id_hotel`) references hotel (`id`),
    foreign key (`id_reporter`) references user (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

delimiter //
DROP TRIGGER IF EXISTS before_insert_user//
CREATE TRIGGER before_insert_user
BEFORE INSERT ON user
FOR EACH ROW
BEGIN
    SET new.id = uuid();
END;//
delimiter ;

delimiter //
DROP TRIGGER IF EXISTS before_insert_hotel//
CREATE TRIGGER before_insert_hotel
BEFORE INSERT ON hotel
FOR EACH ROW
BEGIN
    SET new.id = uuid();
END;//
delimiter ;

delimiter //
DROP TRIGGER IF EXISTS before_insert_issue//
CREATE TRIGGER before_insert_issue
BEFORE INSERT ON issue
FOR EACH ROW
BEGIN
    SET new.id = uuid();
END;//
delimiter ;

delimiter //
DROP TRIGGER IF EXISTS before_insert_material//
CREATE TRIGGER before_insert_material
BEFORE INSERT ON material
FOR EACH ROW
BEGIN
    SET new.id = uuid();
END;//
delimiter ;

delimiter //
DROP TRIGGER IF EXISTS before_insert_revision//
CREATE TRIGGER before_insert_revision
BEFORE INSERT ON revision
FOR EACH ROW
BEGIN
    SET new.id = uuid();
END;//
delimiter ;

delimiter //
DROP TRIGGER IF EXISTS before_insert_upgrade//
CREATE TRIGGER before_insert_upgrade
BEFORE INSERT ON upgrade
FOR EACH ROW
BEGIN
    SET new.id = uuid();
END;//
delimiter ;

