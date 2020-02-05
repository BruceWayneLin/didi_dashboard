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
    password : {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = users
