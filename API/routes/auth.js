const Router = require("express");
const authController = require('../controllers/authController');

const router = Router();


router.post('/login',authController.login)

router.post('/registro',authController.registro)




module.exports = router;


/* const router = require("express").Router();
const validator = require('../config/validator.js');
const passport = require('../config/passport')
const authController = require('../controllers/authController');

router.route('/auth/registration')
.post(authController.userRegistration)

router.route('/auth/login')
.post(authController.userLogIn)

router.route('/auth/logout')
.post(authController.userLogOut)

router.route('/verify/:uniqueString')
.get(authController.userEmailVerification)

router.route('/auth/logInToken')
.get(passport.authenticate('jwt',{session: false}), authController.verifyToken) */
