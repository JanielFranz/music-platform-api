require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
const dbConnect = require('./config/mongo')

app.use(cors())
app.use(express.json())
//the resources can be accessed from storage package
app.use(express.static("storage"))

const port = process.env.PORT || 3000

//Invoking routes(index.js)
//concat with index.js
app.use("/api", require('./routes/'))

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})

//testing if the connection is successful
dbConnect()
