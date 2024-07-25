const {storageModel} = require('../models')

const uploadFile = async (req, res) =>{
    const {body} = req
    const data = await storageModel.create(body)
    res.send(data)
}

module.exports = {uploadFile}