// express config

const express = require('express');
const db = require('./db')
const path = require('path');
const api = require('./api');
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => res.sendFile(index.html));

app.use('/api', api);

module.exports = app;
