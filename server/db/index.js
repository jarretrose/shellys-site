// sequelize init

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/shellysketchesdb', {
  logging: false
});

db.authenticate().
  then(() => {
    console.log('Connected to the database.'
  );
})

module.exports = db;

