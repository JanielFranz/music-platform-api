const {check} = require('express-validator')
const validateResults = require('../utils/handleValidator')
//we create an object for every middleware that we will apply to a method (controller)
//to make the validations we will use the models that we created before
//TRACKS:
const validatorCreateItem = [
    check("name")
        .exists()
        .notEmpty()
        .isLength({min:5, max: 90}),
    check("album")
        .exists()
        .notEmpty()
        .isLength({min:5, max: 90}),
    check("cover")
        .exists()
        .notEmpty(),
    check("artist")
        .exists()
        .notEmpty(),
    check("artist.name")
        .exists()
        .notEmpty(),
    check("artist.nickname")
        .exists()
        .notEmpty(),
    check("artist.nationality")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .notEmpty(),
    check("duration.end")
        .exists()
        .notEmpty(),
    check("mediaId")
        .exists()
        .notEmpty()
        .isMongoId(),
    //calling the function that will handle the validation
    (req,res,next) => {
        return validateResults(req,res,next)
    }


]

const validatorGetItem= [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req,res,next)
    }

]
module.exports = {validatorCreateItem, validatorGetItem}

