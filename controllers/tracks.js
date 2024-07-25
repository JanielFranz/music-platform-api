



//get list of the items
const getItems = (req, res) =>{
    const data = ["hola", "mundo"]
    res.send({data})

}
//get a single item
const getItem = (req, res)=>{}
//Create an item
const createItem = (req, res) =>{}
//Update an item
const updateItem = (req, res)=>{}
//Delete an item
const deleteItem = (req, res) =>{}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}