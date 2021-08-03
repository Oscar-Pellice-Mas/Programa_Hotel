use HotelManagement;

drop table if exists Users;
create table Users(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `role` int(11),
    `id_hotel` int(11), 
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Hotels;
create table Hotels(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `mail` VARCHAR(255) NOT NULL DEFAULT '',
    `phone` VARCHAR(255) NOT NULL DEFAULT '',
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Issues;
create table Issues(
    `id` VARCHAR(255) NOT NULL DEFAULT '',
    `room` VARCHAR(255) NOT NULL DEFAULT '',
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `description` text,
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    `status` int(11) NOT NULL DEFAULT 0,
    `id_hotel` int(11) NOT NULL,
    `reporter_id` int(11) NOT NULL,
    `category` varchar(255) NOT NULL,
    `subcategory`  text,
    `priority` int(11),
    `date` date not null,
    primary key (`id`),
    foreign key (`id_hotel`) references Hotel (`id`),
    foreign key (`reporter_id`) references Users (`id`),
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Materials;
create table Materials(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `quantity` int(11) not null default 0,
    `price` float not null default 0.0,
    `average` text, -- es guarda preu mitja
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists MaterialsUsed;
create table MaterialsUsed(
    `id_issue` int(11) NOT NULL,
    `id_material` int(11) NOT NULL,
    `quantity` int(11) NOT NULL,
    primary key (`id_issue`, `id_material`),
    foreign key (`id_issue`) references Issues (`id`),
    foreign key (`id_material`) references Materials (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists MaterialsRequired;
create table MaterialsRequired(
    `id_issue` int(11) NOT NULL,
    `id_material` int(11) NOT NULL,
    `quantity` int(11) NOT NULL,
    primary key (`id_issue`, `id_material`),
    foreign key (`id_issue`) references Issues (`id`),
    foreign key (`id_material`) references Materials (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Revision;
create table Revision(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `description` int(11) not null default 0,
    `date` date not null,
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    `next` date,
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists Upgrades;
create table Upgrades(
    `id` INT(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `id_hotel` int(11) NOT NULL,
    `reporter_id` int(11) NOT NULL,
    `description` int(11) not null default 0,
    `date` date not null,
    `status` int(11) NOT NULL DEFAULT 0,
    `room` VARCHAR(255) NOT NULL DEFAULT '',
    `picture` VARCHAR(255) NOT NULL DEFAULT '',
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;