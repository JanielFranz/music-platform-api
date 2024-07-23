const mongoose = require('mongoose')

//declaring the schema

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate: {
                validator: (req) =>{
                    return true
                },
                message: "ERROR_URL",
            }
        },
        //artist is composed by other data types
        artist:{
            name:{
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            }
        },
        duration:{
            start: {
                type: Number,
            },
            end: {
                type: Number,
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true, //createdAt, updatedAt
        versionKey: false
    }
)
//users = collection name, in rdb will be a table
module.exports = mongoose.model("tracks", TracksScheme)