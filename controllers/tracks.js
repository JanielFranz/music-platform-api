//This is referring to the index
const {tracksModel} = require('../models')
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");



//get list of the items
const getItems = async (req, res) =>{
    try{
        const data = await tracksModel.find({})
        res.send({data})
    }catch(error){
        //handle error in utils
        handleHttpError(res, "Error get items")
    }



}
//get a single item
const getItem = async (req, res)=>{

    try{
        //Here the matchedData knows that I'm talking about the id from the params
        req = matchedData(req)
        //we use {} to get the id from the request
        const {id} = req
        //we find by the id that we get from the request
        const data= await tracksModel.findById(id)
        console.log(data)
        res.send({data})
    }catch(error){
        handleHttpError(res,"Error get item")
    }
}
//Create an item
const createItem = async (req, res) =>{
    try{
        //matched data only accepts the data that exists in a model, so it cleans the body
        const body = matchedData(req)
        //now it's sending data to the database
        const data = await tracksModel.create(body)
        res.send({data})
    }catch(error){
        //handle error in utils
        handleHttpError(res, "Error creating item")
    }

}
//Update an item
const updateItem = async (req, res)=>{}
//Delete an item
const deleteItem = async (req, res) =>{}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}