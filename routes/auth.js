const express = require('express')
const router = express.Router()
const {validatorLoginUser, validatorRegisterUser} = require('../validators/auth')
const {matchedData} = require("express-validator");
//POST

//I want to have two routers, login and register
//the route is /api/auth/register
router.post("/register", validatorRegisterUser,(req,res) =>{

    req = matchedData(req)
    res.send({data: req})
})

module.exports = router