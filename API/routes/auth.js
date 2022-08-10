const router = require("express").Router();
const validator = require('../config/validator.js');
const passport = require('../config/passport')
const authController = require('../controllers/authController');

router.route('/auth/registration')
.post(validator, authController.userRegistration)

router.route('/auth/login')
.post(authController.userLogIn)

router.route('/auth/logout')
.post(authController.userLogOut)

router.route('/verify/:uniqueString')
.get(authController.userEmailVerification)

router.route('/auth/logInToken')
.get(passport.authenticate('jwt',{session: false}), authController.verifyToken)
