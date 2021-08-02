use HotelManagement;

drop table if exists Users;
create table Users(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL DEFAULT '',
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `role` int(11),
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    `id_hotel` int(11),
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Hotels;
create table Hotels(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Issues;
create table Issues(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `room` VARCHAR(255) NOT NULL DEFAULT '',
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `description` text,
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    `status` int(11) NOT NULL DEFAULT 0,
    `id_hotel` int(11) NOT NULL,
    `reporter_id` int(11) NOT NULL,
    `category` varchar(255) NOT NULL,
    `subcategory` varchar(255),
    `required_materials_ids` varchar(255),
    `used_materials_ids` varchar(255),
    `priority` int(11),
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Materials;
create table Materials(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `quantity` int(11) not null default 0,
    `price` float not null default 0.0,
    `history` text, -- es guarda preu-quantitat
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;