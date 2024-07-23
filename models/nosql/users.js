const mongoose = require('mongoose')

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
            type:String
        },
        role:{
            //enum, is used to restrict the values that can be assigned to the role field
            type:["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true, //createdAt, updatedAt
        versionKey: false
    }
)
//users = collection name, in rdb will be a table
module.exports = mongoose.model("users", UserScheme)