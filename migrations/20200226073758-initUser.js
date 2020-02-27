'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username : 'super-user',
      email : '',
      level : '1',
      password: bcrypt.hashSync('super1234', 10),
      active: true,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{
      username :'super-user'
    }])
  }
};
