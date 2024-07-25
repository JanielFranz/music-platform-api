const multer = require("multer");

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
module.exports = uploadMiddleware