const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
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

StorageScheme.plugin(mongooseDelete, {overrideMethods: "all"})
//users = collection name, in rdb will be a table
module.exports = mongoose.model("storages", StorageScheme)