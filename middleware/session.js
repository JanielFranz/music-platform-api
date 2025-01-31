const {handleHttpError} = require('../utils/handleError')
const {verifyToken} = require('../utils/handleJwt')
const usersModel = require('../models/nosql/users')
/**
 * With this middleware we will check if the header has the authorization token
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const authMiddleware = async (req, res, next) =>{
    try{
        if(!req.headers.authorization){ //if there is no authorization header
            handleHttpError(res,"no hay token", 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop() //get the token from the header doing a split when there is a space and getting the last element
        const dataToken = await verifyToken(token)
        if(!dataToken._id){
            handleHttpError(res, "No se encuentra el id token", 401)
            return
        }
        console.log(dataToken._id)
        const user = await usersModel.findById(dataToken._id) //getting the user by the id that we have in the payload
        req.user = user //adding the user to the request

        next()

    } catch(e){
        handleHttpError(res,"no autorizado",401 )
        console.error(e)
    }
}

module.exports = authMiddleware