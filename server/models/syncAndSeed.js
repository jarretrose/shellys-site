const User = require('./User');
const Image = require('./Image');
const db = require('../db');
const bcrypt = require('bcrypt')

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)

const init = () => {
  return db.sync({ force: true })
    .then(() => Promise.all([

      User.create({ firstName: 'Shelly', lastName: 'Rose', email: 'shelly@email.com', password: bcrypt.hashSync('123456', SALT_ROUNDS) }),
      
      User.create({ firstName: 'Jarret', lastName: 'Rose', email: 'jarret@email.com', password: '123456'}),

      User.create({ firstName: 'Michelle', lastName: 'Rose', email: 'michelle@email.com', password: '123456'}),

      User.create({ firstName: 'Jay', lastName: 'Rose', email: 'jay@email.com', password: '123456'}),

      Image.create({ name: 'original1', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }),

      Image.create({ name: 'original2', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }),

      Image.create({ name: 'original3', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'original4', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'original5', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),


      Image.create({ name: 'original6', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }),

      Image.create({ name: 'original7', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }),

      Image.create({ name: 'original8', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'original9', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'original10', category: 'originals', imageURL: 'images/original.png', thumbnailURL: 'images/original.png',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),








      Image.create({ name: 'copy1', category: 'copywork', imageURL: 'images/copywork.png', thumbnailURL: 'images/copywork.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'copy2', category: 'copywork', imageURL: 'images/copywork.png', thumbnailURL: 'images/copywork.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'copy3', category: 'copywork', imageURL: 'images/copywork.png', thumbnailURL: 'images/copywork.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'copy4', category: 'copywork', imageURL: 'images/copywork.png', thumbnailURL: 'images/copywork.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'copy5', category: 'copywork', imageURL: 'images/copywork.png', thumbnailURL: 'images/copywork.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),


      Image.create({ name: 'postit1', category: 'postits', imageURL: 'images/postits.png', thumbnailURL: 'images/postits.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'postit2', category: 'postits', imageURL: 'images/postits.png', thumbnailURL: 'images/postits.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'postit3', category: 'postits', imageURL: 'images/postits.png', thumbnailURL: 'images/postits.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'postit4', category: 'postits', imageURL: 'images/postits.png', thumbnailURL: 'images/postits.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),

      Image.create({ name: 'postit5', category: 'postits', imageURL: 'images/postits.png', thumbnailURL: 'images/postits.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  }),
    ]))
};

module.exports = init;
