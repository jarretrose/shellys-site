// export & bundle routes route: /api

const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const imageRoutes = require('./imageRoutes');
const authRoutes = require('./authRoutes');

/* 
all routes mounted on /api

/api/images
/api/users

/api/auth
/api/auth/login (post)
/api/auth/register (post)
*/

router.use('/images', imageRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;