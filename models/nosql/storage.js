const mongoose = require('mongoose')

//declaring the schema

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type: String
        },
        filename:{
             type: String
        }
    }, {
        timestamps: true, //createdAt, updatedAt
        versionKey: false
    }
)
//users = collection name, in rdb will be a table
module.exports = mongoose.model("storages", StorageScheme)