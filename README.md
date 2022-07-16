## Description

Simple Users CRUD REST API built with pure NodeJS <br>
Main Technologies: [NodeJS](https://nodejs.dev) and [MongoDB](https://www.mongodb.com)

#### User Model
```
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    }
 ```
## EndPoints

- GET - /users/ - This endpoint must return a list of all users

- GET - /users/:id - This endpoint must return data of one user

- CREATE - /users/ - This endpoint must create one user

- PATCH - /users/:id - This endpoint must update data of one user

- DELETE - /users/:id - This endpoint must delete one user

## Installation

```bash
$ npm install
```
## Set Enviroment

```bash
$ cp .env.example .env
```
Set your DATABASE_URL in `DATABASE_URL`
- example: mongodb://localhost/users

## Running the app

```bash

$ npm run dev

```
