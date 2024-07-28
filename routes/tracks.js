const express = require('express')
const router = express.Router()
const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks")
const {validatorCreateItem} = require('../validators/tracks')
const {validatorGetItem} = require('../validators/tracks')
const customHeader = require('../middleware//customHeader')
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')
//CRUD
//
// GET METHOD
// the "/" corresponds to the root of the /api/tracks path where
// the router is mounted. will GET request to /api/tracks/ will
// trigger the getItems function.
//we are protecting this route with authMiddleware
router.get("/", authMiddleware, getItems)
//POST METHOD
//using validator
// here we can use multiple middlewares
// checkRol has to be after authMiddleware
router.post("/", authMiddleware,checkRol(["admin"]), validatorCreateItem, createItem)
//GET METHOD
router.get("/:id", authMiddleware, validatorGetItem, getItem)
//PUT METHOD
//Here we use both validators, one for the body and one for the params
router.put("/:id", authMiddleware, validatorCreateItem, validatorGetItem, updateItem)
//DELETE METHOD
//It has validatorGetItem because of the id
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem)

module.exports = router