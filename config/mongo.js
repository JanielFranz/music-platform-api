//config of mongo
const mongoose = require('mongoose')

const dbConnect = async () =>{
    const DB_URI = process.env.DB_URI
    try {
        await mongoose.connect(DB_URI, {
            //Commented because of deprecation warning
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        console.log('*** DB Connected ***')
    }catch(err){
        console.log('*** DB Connection Failed ***')
    }
}

module.exports = dbConnect