const {handleHttpError} = require('../utils/handleError')
const {matchedData} = require("express-validator");
const {encrypt} = require("../utils/handlePassword");
const {usersModel} = require("../models");
const {tokenSignIn} = require("../utils/handleJwt");

const signUpController = async (req, res) => {
    try{
        req = matchedData(req) //req cleaned
        const password = await encrypt(req.password) //encrypt password
        const body = {...req, password} //we get all the data from req and add the password or replace it if it exists
        const dataUser = await usersModel.create(body) //persisting data to the database
        dataUser.set('password', undefined, {strict: false}) //we remove the password from the response
        console.log(dataUser)
        const data = {
            token: await tokenSignIn(dataUser), //we generate the token and added to the response
            user: dataUser
        }

        res.send({data})
    }catch(e){
        handleHttpError(res, "No se pudo iniciar sesion")
    }
}

module.exports = {signUpController}