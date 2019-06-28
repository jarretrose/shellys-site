// sequelize init

const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false
});

db.authenticate().
  then(() => {
    console.log('Connected to the database.'
  );
})

module.exports = db;

