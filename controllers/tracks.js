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
const updateItem = async (req, res)=>{

    try{
        //we extract the id and the rest goes to the body
        //we are creating two objects, one with id and the other with the rest of stuff
        const {id, ...body} = matchedData(req)
        console.log(id)
        console.log(body)
        //the first argument is the id and the second is the body (find and update)
        //Here we have to specify wich one is the id, it's not like the get method
        const data = await tracksModel.findOneAndUpdate({_id: id}, body)
        console.log(data)
        res.send({data})
    }catch(error){
        handleHttpError(res, "Error updating item")
    }

}
//Delete an item
const deleteItem = async (req, res) =>{
    try{
        req = matchedData(req)
        const {id} = req
        //the dumbass of the instructor use delete and it doesn't work for him because of soft delete
        //Instead of findByIdAndDelete he uses deleteOne({_id:id})
        const data = await tracksModel.findByIdAndDelete(id)
        res.send(data)
    }catch(error){
        handleHttpError(res, "Error deleting item")
    }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}