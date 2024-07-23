require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
const dbConnect = require('./config/mongo')

app.use(cors())

const port = process.env.PORT || 3000

//Invoking routes
//concat with tracks
app.use("/api", require('./routes/tracks'))

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})

//testing if the connection is successful
dbConnect()
