const {storageModel} = require('../models')
//Getting values from .env file
const PUBLIC_URL = process.env.PUBLIC_URL




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
module.exports = {uploadFile}