const swaggerJsdoc = require('swagger-jsdoc')


/**
 * API config info
 * When we define servers we can select which one we want to use (QA, PROD, DEV)
 * @type {{}}
 */
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API music platform",
        version: "1.0.0"
    }
}





/**
 * Swagger options for the documentation
 * @type {{}}
 */
const options = {
    swaggerDefinition, //swaggerDefinition:swaggerDefinition
    apis:[
        "./routes/*js" //this is the path where the routes are and ends in js
    ]
}
const openApiConfiguration = swaggerJsdoc(options)

module.exports = openApiConfiguration