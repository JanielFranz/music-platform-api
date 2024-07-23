//config of mongo
const mongoose = require('mongoose')

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser : true,
        userUnifiedTopology:true,
    },(err,res) =>{
        if(!err){
            console.log('*** DB Connected ***')
        }else{
            console.log('*** DB Connection Failed ***')
        }
    })
}

module.exports = dbConnect