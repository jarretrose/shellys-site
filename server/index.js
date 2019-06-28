// port config

const app = require('./app');
const port = process.env.PORT || 8080;
const init = require('./db/models/syncAndSeed')

app.listen(port, () => console.log(`App is listening on port ${port}.`));

init();
