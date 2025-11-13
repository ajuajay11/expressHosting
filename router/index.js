const express = require('express');
const router = express.Router();

const UserRoute = require('./user');
const OtpRoute = require('./otp');
const MatchRoute = require('./match');

router.use('/user', UserRoute);
router.use('/match', MatchRoute);
router.use('/otp', OtpRoute);

module.exports = router;
