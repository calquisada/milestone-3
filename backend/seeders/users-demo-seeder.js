'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
        {
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
       
        {
            firstName: 'Jimmy',
            lastName: 'Foreman',
            email: 'jimmy.foreman@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            firstName: 'Paul',
            lastName: 'George',
            email: 'paul.george@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },

      ], {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
    }
  };