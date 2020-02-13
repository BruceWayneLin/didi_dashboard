'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
      'users',
      'level',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '3'
      },
      {
          after: 'password'
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.removeColumn(
        'users',
        'level')
      ]
    )
  }
};
