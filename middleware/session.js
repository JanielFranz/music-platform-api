const {handleHttpError} = require('../utils/handleError')
const {verifyToken} = require('../utils/handleJwt')

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
        }
        const token = req.headers.authorization.split(' ').pop() //get the token from the header doing a split when there is a space and getting the last element
        const dataToken = await verifyToken(token)
        if(!dataToken._id){
            handleHttpError(res, "No se encuentra el id token", 401)
        }
        next()

    } catch(e){
        handleHttpError(res,"no autorizado",401 )
    }
}

module.exports = authMiddleware