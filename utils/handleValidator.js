const {validationResult} = require('express-validator')

const validateResults = (req, res, next) => {
    try{
        //if there is an error it will throw an exception
        validationResult(req).throw()
        //if there are no errors it will return the next middleware
        return next()
    }catch(error){
        res.status(400)
        res.send({errors: error.array() })
    }
}

module.exports = validateResults