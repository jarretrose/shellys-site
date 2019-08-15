// port config

const app = require('./app');
const port = process.env.PORT || 8080;
// const init = require('./models/syncAndSeed')

app.listen(port, () => console.log(`App is listening on port ${port}.`));

// init();
