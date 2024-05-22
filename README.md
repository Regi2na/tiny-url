# Tiny Url Project

A brief description of what this project about

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Frontend (React.js)](#frontend-reactjs)
    - [Backend (Node.js API)](#backend-nodejs-api)
    - [NGINX](#nginx)
  - [Running the Project](#running-the-project)
  - [Environment Variables](#environment-variables)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This project is a full-stack web application that serve as URL shortener, it includes:
- A **React.js** client
- A **Node.js** server
- An **NGINX** server for serving the client and the server API

## Project Structure
tiny-url/
│
├── client/ # React.js web application
│ ├── public/
│ └── src/
│
├── server/ # Node.js API
│ ├── server.js
│ └── app/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── routes/
│
├── nginx/ # NGINX configuration
│ └── nginx.conf
│
├── docker-compose.yml # Docker Compose file
├── setup.sql # To setup maria db
└── README.md # This file


## Prerequisites

Ensure you have the following installed on your local development environment:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
