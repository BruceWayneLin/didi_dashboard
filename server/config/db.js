const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize('dashboard', process.env.NODE_DB_UESR, 'didiSuper%4F', {
  dialect: 'mysql',
  host: process.env.NODE_DB_HOST,
  port: 3307,
  socketPath: '/var/run/mysqld/mysqld.sock',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
//   host: 'database-1.chbscvt4ogov.us-east-1.rds.amazonaws.com'
})

const didiDB = new Sequelize('new-cat', process.env.DIDI_DB_USER, process.env.DIDI_DB_PASS, {
  dialect: 'mysql',
  host: process.env.DIDI_DB_HOST,
  port: process.env.DIDI_DB_PORT,
  // socketPath: '/var/run/mysqld/mysqld.sock',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
//   host: 'database-1.chbscvt4ogov.us-east-1.rds.amazonaws.com'
})

module.exports = {
  sequelize,
  didiDB
}