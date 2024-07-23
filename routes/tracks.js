const express = require('express')
const router = express.Router()

//CRUD

router.get("/", (req, res) =>{
    const data = ["hola", "mundo"]
    res.send({data})

})

module.exports = router
