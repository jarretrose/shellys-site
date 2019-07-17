const express = require('express');
const path = require('path');
const morgan = require('morgan')

const dotenv = require('dotenv');
dotenv.config();

const db = require('./db')
const api = require('./api');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => res.sendFile(index.html));

app.use('/api', api);

// custom error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });

});


module.exports = app;
