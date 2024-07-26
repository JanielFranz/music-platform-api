const express = require('express')
const router = express.Router()
const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks")
const {validatorCreateItem} = require('../validators/tracks')
const {validatorGetItem} = require('../validators/tracks')
const customHeader = require('../middleware//customHeader')

//CRUD
//
// GET METHOD
// the "/" corresponds to the root of the /api/tracks path where
// the router is mounted. will GET request to /api/tracks/ will
// trigger the getItems function.
router.get("/", getItems)
//POST METHOD
//using validator
// here we can use multiple middlewares
router.post("/", validatorCreateItem, createItem)
//GET METHOD
router.get("/:id", validatorGetItem, getItem)
//PUT METHOD
//Here we use both validators, one for the body and one for the params
router.put("/:id", validatorCreateItem, validatorGetItem, updateItem)
//DELETE METHOD
//It has validatorGetItem because of the Id
router.delete("/:id",validatorGetItem, deleteItem)

module.exports = router