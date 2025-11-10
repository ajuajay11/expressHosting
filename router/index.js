const express = require('express');
const router = express.Router();
const UserRoute = require('./user')
const OtpRoute = require('./otp')
 
router.use("/user", UserRoute);
router.use("/otp", OtpRoute);

module.exports = router; 