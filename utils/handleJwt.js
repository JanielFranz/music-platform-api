const   jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * We have to pass the user object to the function, and it will return a token
 * @param user
 * @returns {Promise<*>}
 */
const tokenSign = async (user) =>{
    console.log("el id es", user._id) //here it could be user.id or user._id, it works but the presentation of the value is different
    const sign = jwt.sign(
        { //set the payload
            _id : user.id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    )
    return sign
}

/**
 * We have to pass the token to the function and this will verify it if the token is valid it will return the payload
 * @param tokenJwt
 * @returns {Promise<*>}
 */
const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e){
        return null
    }
}

module.exports = {tokenSign, verifyToken}