const express = require('express')
const router = express.Router()
const {validatorLoginUser, validatorRegisterUser} = require('../validators/auth')
const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword")
const {usersModel} = require("../models/index")
//POST

//I want to have two routers, login and register
//the route is /api/auth/register
router.post("/register", validatorRegisterUser,async (req,res) =>{
    req = matchedData(req) //req cleaned
    const password = await encrypt(req.password) //encrypt password
    const body = {...req, password} //we get all the data from req and add the password or replace it if it exists
    const data = await usersModel.create(body) //persisting data to the database
    data.set('password', undefined, {strict: false}) //we remove the password from the response
    res.send({data})
})

module.exports = router