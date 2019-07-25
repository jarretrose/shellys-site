// sequelize init

const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false
});

db.authenticate()
  .then(() => console.log('Successfully connected to the database.'))
  .catch(err => console.log('Error connecting to the database.', err));

module.exports = db;
