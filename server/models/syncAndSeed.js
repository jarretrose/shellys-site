const User = require('./User');
const Image = require('./Image');
const db = require('../db');

const init = () => {
  return db.sync({ force: true })
    .then(() => Promise.all([

      User.create({ firstName: 'Shelly', lastName: 'Rose', email: 'shelly@email.com', password: '123456'}),
      User.create({ firstName: 'Jarret', lastName: 'Rose', email: 'jarret@email.com', password: 'abcdef'}),
      User.create({ firstName: 'Michelle', lastName: 'Rose', email: 'michelle@email.com', password: '1a2b3c'}),
      User.create({ firstName: 'Jay', lastName: 'Rose', email: 'jay@email.com', password: 'a1b2c3'}),

      Image.create({ name: 'original1', category: 'originals', imageURL: 'images/original.png' }),
      Image.create({ name: 'original2', category: 'originals', imageURL: 'images/original.png' }),
      Image.create({ name: 'original3', category: 'originals', imageURL: 'images/original.png' }),
      Image.create({ name: 'original4', category: 'originals', imageURL: 'images/original.png' }),
      Image.create({ name: 'original5', category: 'originals', imageURL: 'images/original.png' }),

      Image.create({ name: 'copy1', category: 'copywork', imageURL: 'images/copywork.png' }),
      Image.create({ name: 'copy2', category: 'copywork', imageURL: 'images/copywork.png' }),
      Image.create({ name: 'copy3', category: 'copywork', imageURL: 'images/copywork.png' }),
      Image.create({ name: 'copy4', category: 'copywork', imageURL: 'images/copywork.png' }),
      Image.create({ name: 'copy5', category: 'copywork', imageURL: 'images/copywork.png' }),

      Image.create({ name: 'postit1', category: 'postits', imageURL: 'images/postits.png' }),
      Image.create({ name: 'postit2', category: 'postits', imageURL: 'images/postits.png' }),
      Image.create({ name: 'postit3', category: 'postits', imageURL: 'images/postits.png' }),
      Image.create({ name: 'postit4', category: 'postits', imageURL: 'images/postits.png' }),
      Image.create({ name: 'postit5', category: 'postits', imageURL: 'images/postits.png' }),

    ]))
};

module.exports = init;
