const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const _jwtSecret = process.env.jwtSecret;

const checkAuth = (req, res, next) => {
  const token = req.headers['token'];

  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, _jwtSecret, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    req.user = {
      login: decoded.login,
      id: decoded.id
    };

    next();

  });

};

module.exports = checkAuth;

/*

authentication middleware should be used as the middleware argument (the second one) in endpoints functions. Now, the user can’t access data without providing a valid authentication token.

app.get('/orders', authMiddleware.checkAuth, orderController.getOrders);
app.get('/orders/:id', authMiddleware.checkAuth, orderController.getOrder);
app.post('/orders', authMiddleware.checkAuth, orderController.addOrder);

*/