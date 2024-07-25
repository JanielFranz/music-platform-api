const express = require('express')
const router = express.Router()

module.exports = router

//this route will be /api/storage

router.post("/", (req, res) =>{
    res.send({algo: 1})
})