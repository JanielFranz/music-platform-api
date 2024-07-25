const express = require('express')
const router = express.Router()
const {getItems, getItem, createItem} = require("../controllers/tracks")
//CRUD
//
// GET METHOD
// the "/" corresponds to the root of the /api/tracks path where
// the router is mounted. will GET request to /api/tracks/ will
// trigger the getItems function.
router.get("/", getItems)
//POST METHOD
router.post("/", createItem)

module.exports = router
