const {storageModel} = require('../models')

const uploadFile = async (req, res) =>{
    const {body, file} = req
    //
    const fileData = {
        filename: file.filename
    }
    const data = await storageModel.create(body)
    console.log(file)
    res.send({file})
}
//If we use {} in the import we will use {} too
//file show us the information of the file that we uploaded, we can use this info later to use filters or validations
module.exports = {uploadFile}