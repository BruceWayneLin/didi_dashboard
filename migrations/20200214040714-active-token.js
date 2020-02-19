'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
      'users',
      'active',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        after: 'password'
      }),
      queryInterface.addColumn(
        'users',
        'token',
      {
          type: Sequelize.TEXT,
          allowNull: false,
          defaultValue: '',
          after: 'password'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.removeColumn(
          'users',
          'active'),
        queryInterface.removeColumn(
          'users',
          'token')
      ]
    )
  }
};
