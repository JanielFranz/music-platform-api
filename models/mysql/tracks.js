const {sequelize} = require('../../config/mysql')
const {DataTypes} = require('sequelize')

const Track = sequelize.define("tracks",
    {
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

module.exports = Track