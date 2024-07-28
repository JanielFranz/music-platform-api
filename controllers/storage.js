const fs = require('fs')
const {storageModel} = require('../models')
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");

//Getting values from .env file
const PUBLIC_URL = process.env.PUBLIC_URL
//where is storage the file
const MEDIA_PATH = `${__dirname}/../storage`

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

const deleteFile = async(req,res) =>{
    try{
        const{id} = matchedData(req)
        //finding the data by id
        const dataFile = await storageModel.findById(id)
        //deleting from the db
        await storageModel.deleteOne({_id:id})
        //getting the file name from the data
        const {filename} = dataFile
        //we get the file path
        const filePath = `${MEDIA_PATH}/${filename}`
        // to delete the file from the hard disk
        fs.unlinkSync(filePath)
        //we delete the file but not of the db
        const data = {
            filePath,
            deleted:1
        }
        res.send({data})
    }catch(e){
        handleHttpError(res, "No se pudo eliminar")
    }
}


const uploadFile = async (req, res) => {
    try {
        const {file} = req
        console.log("file", {file})
        //
        //we use fileData to show the information in the response
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        //making the post request to the database
        const data = await storageModel.create(fileData)
        console.log(fileData.filename)
        res.send(data)
    } catch (e) {
        handleHttpError(res, "No se pudo crear el archivo")
    }
}
//If we use {} in the import we will use {} too
//file show us the information of the file that we uploaded, we can use this info later to use filters or validations
module.exports = {uploadFile, getFiles, getFile, deleteFile}