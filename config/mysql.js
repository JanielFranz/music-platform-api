const{Sequelize} = require('sequelize')

const database = process.env.MYSQL_DATABASE
const username = process.env.MYSQL_USER
const password = process.env.MYSQL_PASSWORD
const host = process.env.MYSQL_HOST
/**
 * we are creating a new instance of Sequelize and passing the database, username, password, and host as parameters.
 * @type {Sequelize}
 */
const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host, // host: host
        dialect:"mysql"
    }
)

/**
 * this shows if the connection was successful or not
 * @returns {Promise<void>}
 */
const dbConnectMySql = async () => {
    try{
        await sequelize.authenticate()
        console.log("My sql conexion exitosa")
    }catch(e){
        console.error(e)
        console.log("My sql error de conexion")
    }
}

module.exports = {sequelize, dbConnectMySql}