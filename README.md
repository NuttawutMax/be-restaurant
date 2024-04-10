# Restaurant

Powered by nodejs using expressjs on mySQL2

### How to run

Run `npm install` to install the required package node modules and dependencies

Run `node server` for a dev server and use `http://localhost:4200/` to navigate as a backend

### Prepare for mySQL

Create schema name `restaurant`

and

CREATE TABLE `menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` longtext NOT NULL,
  `description` longtext NOT NULL,
  `price` int NOT NULL,
  `image` longblob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

and

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` longtext NOT NULL,
  `password` longtext NOT NULL,
  `name` longtext NOT NULL,
  `surname` longtext NOT NULL,
  `display_name` longtext,
  `phone` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

