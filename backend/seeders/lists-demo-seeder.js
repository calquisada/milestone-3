'use strict';

const { lists } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const listItems = [
      {
        listname: 'Grocery List',
        listitem1: 'Apples',
        listitem2: 'Bananas',
        listitem3: 'Milk',
        listitem4: 'Bread',
        listitem5: 'Eggs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listname: 'Todo List',
        listitem1: 'Check the garden',
        listitem2: 'Feed the dog',
        listitem3: 'Clean the house',
        listitem4: 'Take the dog out',
        listitem5: 'Homework',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ];

    await queryInterface.bulkInsert('lists', listItems, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('lists', null, {});
  }
};