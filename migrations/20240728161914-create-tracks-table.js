'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tracks', {
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
      },
      createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tracks')
  }
};
