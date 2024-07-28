const {handleHttpError} = require('../utils/handleError')

/**
 * Middleware to check the role of the user, the first () receives an array with the users
 * @returns {(function(*, *, *): void)|*}
 */
const checkRol = (rolesValidos) => (req, res, next) => {
    try{
        const {user} = req //get the user from the request
        console.log({user})
        const rolesByUser = user.role //get the roles from the user
//Array.prototype.some() method tests whether at least one element in the array passes the test implemented by the provided function.
//The Array.prototype.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
        const checkValueRol = rolesValidos.some((rolSingle) => rolesByUser.includes(rolSingle)) // check if the user has the role
        if(!checkValueRol){ //if the user does not have the role
            handleHttpError(res, "El usuario no tiene permisos para acceder a este recurso", 401)
            return
        }
        next()
    }catch(e){
        handleHttpError(res, "No tienes permisos para acceder a este recurso", 401)
    }

}

module.exports = checkRol