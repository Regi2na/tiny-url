# Tiny Url Project

This project is a full-stack web application that serve as URL shortener.

  - [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
  - [Configuration and Setup](#configuration-and-setup)
  - [Features](#features)
  - [Technology used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
    - [Docker] (#docker)   
    - [NGINX](#nginx)


## Project Structure

```
tiny-url/
├── server/ # Express.js Backend
│   ├── app/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── Dockerfile
│       
├── client/ # React.js Frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── errors/
│   │   ├── middleware/
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── index.html
│   └── Dockerfile
│
├── nginx/ # NGINX configuration
│   ├── default.conf
│   └── Dockerfile
│  
├── docker-compose.yml # Docker Compose file
├── setup.sql # To setup maria db
└── README.md # This file
```


## Prerequisites

Ensure you have the following installed on your local development environment:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


## Configuration and Setup

To run this project locally, clone the repository on your machine.
Open the project in your prefered code editor.
Go to terminal -> New terminal (If you are using VS code).

To bring up all the services
At root folder, run the following command:

```
$ docker-compose -up -d
```

The service is running on http://localhost:8080 
- nginx port:8080
- maria_db port:3306
- api (server) port:3001
- web (client) port:5173
Refer to docker-compose.yml for the detail 

To bring down all the services
At root folder, run the following command:

```
$ docker-compose -down -v
```

##  Features

- Generate Tiny URL http://localhost:8080
- Access original URL from Tiny URL http://localhost:8080/:tinyurlcode example http://localhost:8080/aEnEY_ebr 


##  Technologies used

####  Frontend

- [React JS ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [Bootstrap CSS](https://www.npmjs.com/package/bootstrap) - For User Interface
- [React Vite](https://vitejs.dev/guide/) - a build tool that provide a faster and leaner development experience for modern web projects


####  Backend
- [Node JS](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express JS](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Maria DB](https://www.npmjs.com/package/mariadb) - For database
- [Cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [Nodemon](https://www.npmjs.com/package/nodemon) - To monitor changes to the program code that is being developed
- [Shortid](https://www.npmjs.com/package/shortid) - short non-sequential url-friendly unique id generator


####  Database
- [Maria DB](https://mariadb.org/) - A community-developed db, similar as MySQL


####  Docker
- [Docker](https://docs.docker.com/get-started) - Docker provides the ability to package and run an application in a loosely isolated environment called a container
- [Docker Compose](https://docs.docker.com/compose/) - Docker Compose is a tool for defining and running multi-container applications


####  NGINX
- [NGINX](https://nginx.org/en/docs) - Web server