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
const getItem = (req, res)=>{

    try{

    }catch(error){

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
const updateItem = (req, res)=>{}
//Delete an item
const deleteItem = (req, res) =>{}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}