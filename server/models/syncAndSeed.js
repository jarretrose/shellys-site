const User = require('./User');
const Image = require('./Image');
const db = require('../db');

const init = () => {
  return db.sync({ force: true })
    .then(() => Promise.all([
      User.create({ email: 'shelly@email.com', password: '123456'}),
      User.create({ email: 'jarret@email.com', password: 'abcdef'}),
      User.create({ email: 'michelle@email.com', password: '1a2b3c'}),
      User.create({ email: 'jay@email.com', password: 'a1b2c3'}),      
      Image.create({ name: 'Demo', category: 'copywork', imageURL: 'images/poison-heart.png' }),   
      Image.create({ name: 'Demo2', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo3', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo4', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo5', category: 'original', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo6', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo7', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo8', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo9', category: 'copywork', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo10', category: 'original', imageURL: 'images/poison-heart.png' }),
      Image.create({ name: 'Demo11', category: 'copywork', imageURL: 'images/poison-heart.png' }), 
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
