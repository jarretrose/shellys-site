const User = require('./users');
const Image = require('./images');
const db = require('../index')

const init = () => {
  return db.sync({ force: true })
    .then(() => Promise.all([
      User.create({ name: 'Shelly Rose', email: '12345@email.com' }),
      User.create({ name: 'Jarret Rose', email: '67890@email.com' }),
      Image.create({ name: 'Demo', category: 'copywork', imageURL: 'images/poison-heart.png', cols: 2 }),   
      Image.create({ name: 'Demo2', category: 'copywork', imageURL: 'images/poison-heart.png', cols: 2, }),
      Image.create({ name: 'Demo3', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo4', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo5', category: 'original', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo6', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo7', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo8', category: 'copywork', imageURL: 'images/poison-heart.png', cols: 2 }),
      Image.create({ name: 'Demo9', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo10', category: 'original', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo11', category: 'copywork', imageURL: 'images/poison-heart.png', cols: 2 }), 
      Image.create({ name: 'Demo12', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo13', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo14', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo15', category: 'original', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo121', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo131', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo141', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo151', category: 'original', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo1211', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo1311', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo1411', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo1511', category: 'original', imageURL: 'images/poison-heart.png' }),
    ]))
};

module.exports = init;
