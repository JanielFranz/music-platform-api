const express = require('express')
const router = express.Router()
const {validatorLoginUser, validatorRegisterUser} = require('../validators/auth')
const {signUpController, signInController} = require('../controllers/auth')
//POST

//I want to have two routers, login and register
//the route is /api/auth/register
router.post("/register", validatorRegisterUser, signUpController)
router.post("/login", validatorLoginUser, signInController )

module.exports = router