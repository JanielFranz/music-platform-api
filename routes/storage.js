const multer = require('multer')
const express = require('express')
const router = express.Router()

module.exports = router

//multer configuration
const storage = multer.diskStorage({
    //callback method will be called when something happen
    destination: function(req, file, cb){
        //we will save the files in the next path
        //__dirname is the current directory
        const pathStorage = `${__dirname}/../storage`
        //null is the error and pathStorage is the destination
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        //In this case we will never override a file, but we can if we want
        //This will split the file name and pop takes the last element
        const ext = file.originalname.split(".").pop()

        //The date.now gives the actual time but in format unix
        const filename = `file-${Date.now()}.${ext}`

        //null is the error and fileName is the name of the file
        cb(null, filename)
    }
})

// middleware that will handle the file upload
const uploadMiddleware = multer({
    //storage will use storage as a property = storage: storage but we can make it easier
    storage
})





//this route will be /api/storage
//we inject the middleware here
//.single() for one file  that we will upload, else .multi(), inside the single we capture the name of the file,
// that will be sent in the request
router.post("/",uploadMiddleware.single("myFile") , (req, res) =>{
    res.send({algo: 1})
})