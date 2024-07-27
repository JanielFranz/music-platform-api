const bcrypt = require("bcrypt")



/**
 * encrypt password, we use salt 10 to make it more secure
 * @param passwordPlain = password in plain text
 * @returns {Promise<string>} = hashed password
 */
const encrypt = async (passwordPlain) =>{
    const hash = await bcrypt.hash(passwordPlain, 10)
    return hash

}

/**
 * compare password  hashed with a flat text
 * @param passwordPlain
 * @param hashedPassword
 * @returns {Promise<boolean>}
 */
const compare = async (passwordPlain, hashedPassword) =>{
    return await bcrypt.compare(passwordPlain, hashedPassword)
}

module.exports = {encrypt, compare}