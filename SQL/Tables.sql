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
drop table if exists average cascade;

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

create table average(
    `id` int(11) not null primary key auto_increment,
    `id_hotel` VARCHAR(128) NOT NULL DEFAULT '',
    `id_material` VARCHAR(128) NOT NULL DEFAULT '',
    `price` float,
    `quantity` integer,
    `created_at` datetime not null default now()
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
    `description` text,
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
    insert into average(id_hotel, id_material, price, quantity, created_at)
    values (new.id_hotel, new.id, new.price, new.quantity, now());
END;//
delimiter ;

delimiter //
DROP TRIGGER IF EXISTS update_material_average//
CREATE TRIGGER update_material_average
BEFORE UPDATE ON material
FOR EACH ROW
BEGIN

    declare id_last_price integer;

    IF old.price != new.price then
        insert into average(id_hotel, id_material, price, quantity)
        values (old.id_hotel, old.id, new.price, new.quantity - old.quantity);
    else
        select id into id_last_price from average where old.id_hotel = average.id_hotel and old.id = average.id_material
            order by average.created_at desc limit 1;
        update average set average.quantity = average.quantity + (new.quantity - old.quantity)
        where average.id = id_last_price;
    end if;

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


