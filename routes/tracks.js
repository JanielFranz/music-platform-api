const express = require('express')
const router = express.Router()
const {getItems, getItem} = require("../controllers/tracks")
//CRUD
//
// GET METHOD
router.get("/", getItems)
router.get("/:id", getItem)

module.exports = router
