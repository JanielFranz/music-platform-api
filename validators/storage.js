const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorGetFile = [
    check("id")
        .exists()
        .notEmpty(),
    (req, res, next) =>{
        return validateResults(req,res,next)
    }
]
module.exports = {validatorGetFile}