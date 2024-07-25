const express = require('express')
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
module.exports = router





//this route will be /api/storage
//we inject the middleware here
//.single() for one file  that we will upload, else .multi(), inside the single we capture the name of the file,
// that will be sent in the request
router.post("/",uploadMiddleware.single("myFile") , (req, res) =>{
    res.send({algo: 1})
})