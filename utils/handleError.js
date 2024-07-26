//In this function we will handle the errors that we will have in the application
const handleHttpError = (res, message = 'Algo sucedio', code = 404) =>{
    res.status(code)
    res.send({error: message})
}

module.exports = {handleHttpError}