const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const users = sequelize.define('users', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username : Sequelize.STRING,
    email : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    level : {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '5'
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    token : {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: ''
    },
    active : {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
})

module.exports = users
