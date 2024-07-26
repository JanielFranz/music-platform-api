const {storageModel} = require('../models')
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");

//Getting values from .env file
const PUBLIC_URL = process.env.PUBLIC_URL

const getFiles = async (req, res) =>{
    try{
        const data = await storageModel.find({})
        res.send({data})
    }catch(e){
        handleHttpError(res, "No se pudo obtener los archivos")
    }
}

const getFile = async(req,res) =>{
    try{
        const {id} = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({data})
    }catch(e){
        handleHttpError(res,"No se pudo obtener el archivo especifico")
    }
}


const uploadFile = async (req, res) =>{
    const {body, file} = req
    //
    //we use fileData to show the information in the response
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    //making the post request to the database
    const data= await storageModel.create(fileData)
    console.log(fileData.filename)
    res.send(data)
}
//If we use {} in the import we will use {} too
//file show us the information of the file that we uploaded, we can use this info later to use filters or validations
module.exports = {uploadFile, getFiles, getFile}