// express config

const express = require('express');
const db = require('./db')
const path = require('path');
const morgan = require('morgan');
const api = require('./api');

const app = express();

app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.use('/api', api);

app.get('/', (req, res) => res.sendFile(index.html));

module.exports = app;
