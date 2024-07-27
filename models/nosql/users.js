const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
//declaring the schema

const UserScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            //for not returning the data in the response
            select: false
        },
        role:{
            //enum, is used to restrict the values that can be assigned to the role field
            type : ["admin", "user"],
            default: "user"
        }
    },
    {
        timestamps: true, //createdAt, updatedAt
        versionKey: false
    }
)

UserScheme.plugin(mongooseDelete, {overrideMethods: "all"})
//users = collection name, in rdb will be a table
module.exports = mongoose.model("users", UserScheme)