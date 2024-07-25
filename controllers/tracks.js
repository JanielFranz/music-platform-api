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
const createItem = (req, res) =>{
    const {body} = req
    //It's undefined because we are not using express.json
    console.log(body)
    res.send({algo:1})
}
//Update an item
const updateItem = (req, res)=>{}
//Delete an item
const deleteItem = (req, res) =>{}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}