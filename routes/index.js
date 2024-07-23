const express = require('express')
const router = express.Router()
const fs = require('fs')

//Absolute route
const PATH_ROUTES = __dirname

//split the . and return the name of the file
const removeExtension = (fileName) =>{
    return fileName.split('.').shift()
}

//read the directory, returns an array with the names of the files
fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file) //index or track
    //we don't want to return index
    if(name!== 'index'){
        console.log("Cargando ruta", name)
        //we are requiring file to get the content of the file
        router.use(`/${name}`, require(`./${file}`)) //it will show /api/track, storage,etc.
    }
} )

module.exports = router