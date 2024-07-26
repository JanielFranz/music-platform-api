//This is referring to the index
const {tracksModel} = require('../models')



//get list of the items
const getItems = async (req, res) =>{
    const data = await tracksModel.find({})
    res.send({data})

}
//get a single item
const getItem = (req, res)=>{}
//Create an item
const createItem = async (req, res) =>{
    const {body} = req
    //now it's sending data to the database
    console.log(req.headers)
    const data = await tracksModel.create(body)
    res.send({data})
}
//Update an item
const updateItem = (req, res)=>{}
//Delete an item
const deleteItem = (req, res) =>{}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}