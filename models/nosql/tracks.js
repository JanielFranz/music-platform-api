const mongoose = require('mongoose')
//mongoose delete for soft delete
const mongooseDelete = require('mongoose-delete')
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

/**
 * Implementing method to make a relation between this model and storage model
 */
TracksScheme.statics.findAllData = async function(name){ //findAllData is the name of the method
    try{
        const joinData = await this.aggregate([
            {
                $lookup: {
                    from: "storages", //collection we are joining name
                    localField: "mediaId", //tracks.mediaId
                    foreignField: "_id", //storage._id
                    as: "audio" //Alias
                }
            }
        ])
        console.log("Data unida", joinData)
        return joinData
    }catch(e){
        console.error(e)
    }
}
//overriding native methods, this is for soft delete
TracksScheme.plugin(mongooseDelete, {overrideMethods: "all"})
//users = collection name, in rdb will be a table
module.exports = mongoose.model("tracks", TracksScheme)