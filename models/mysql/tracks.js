const {sequelize} = require('../../config/mysql')
const {DataTypes} = require('sequelize')
const Storage = require('./storage')

const Track = sequelize.define("tracks",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        album:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cover: {
            type: DataTypes.STRING,
            allowNUll: false
        },
        artist_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist_nickname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist_nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration_start: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration_end: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mediaId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)
/**
 * Implementing personalized model
 *
 * @type {ModelCtor<Model>}
 */
Track.findAllData = function(models){ //findAllData is the name of the function
    Track.belongsTo(Storage, {
        foreignKey: 'mediaId',
        as: 'audio'
    })

    return Track.findAll({include:'audio'}) //we are returning the function findAll with the include of the Storage model
}


module.exports = Track