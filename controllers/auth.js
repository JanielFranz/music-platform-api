const {handleHttpError} = require('../utils/handleError')
const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {usersModel} = require("../models");
const {tokenSign} = require("../utils/handleJwt");

/**
 * This function is a controller that is responsible for creating a new user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const signUpController = async (req, res) => {
    try{
        req = matchedData(req) //req cleaned
        const password = await encrypt(req.password) //encrypt password
        const body = {...req, password} //we get all the data from req and add the password or replace it if it exists
        const dataUser = await usersModel.create(body) //persisting data to the database
        console.log(dataUser)
        dataUser.set('password', undefined, {strict: false}) //we remove the password from the response
        console.log("La data del usuario es:", dataUser)
        const data = {
            token: await tokenSign(dataUser), //we generate the token and added to the response
            user: dataUser
        }

        res.send({data})
    }catch(e){
        handleHttpError(res, "No se pudo crear la cuenta")
        console.error(e)
    }
}

/**
 * This function is a controller that is responsible for logging in the user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const signInController = async(req, res) => {
    try{
        req = matchedData(req) //req cleaned
        const user = await usersModel.findOne({email:req.email})//we search for the user in the database where email is equal to req.email.
        if(!user){ //if user doesn't exist
            res.send(res, "No se encontro el usuario", 404)
        }

        const hashedPassword = user.password
        console.log("la clav de bd es", hashedPassword)
        const checkPassword = await compare(req.password, hashedPassword) //we compare the password to know if it is correct. this returns true or false
        if(!checkPassword){ //if the password is incorrect
            handleHttpError(res, "Contrasenia incorrecta",401)
        }

        user.set('password', undefined, {strict: false}) //we remove the password from the response

        const data  = {
            token: await tokenSign(user), //we generate the token
            user //we don't use user:user because they have the same name
        }

        res.send({data})

    }catch(error){
        handleHttpError(res, "No se pudo iniciar sesion")
    }
}

module.exports = {signUpController, signInController}