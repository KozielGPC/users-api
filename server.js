require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(3000, () => console.log('Server listening on port 3000'));