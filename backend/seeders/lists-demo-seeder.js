'use strict';

const { lists } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const list = [
      {
        task: 'Buy groceries',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Clean the house',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Take dog out',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Do homework',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('lists', list, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('lists', null, {});
  }
};