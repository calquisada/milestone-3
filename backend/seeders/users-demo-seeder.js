'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          created_at: new Date(),
          updated_at: new Date(),
          password_digest: "test"
        },
        
        {
          first_name: 'Jane',
          last_name: 'Smith',
          email: 'jane.smith@example.com',
          created_at: new Date(),
          updated_at: new Date(),
          password_digest: "test"
        },
        
        {
          first_name: 'Jimmy',
          last_name: 'Foreman',
          email: 'jimmy.foreman@example.com',
          created_at: new Date(),
          updated_at: new Date(),
          password_digest: "test"
        },

        {
          first_name: 'Paul',
          last_name: 'George',
          email: 'paul.george@example.com',
          created_at: new Date(),
          updated_at: new Date(),
          password_digest: "test"
        },

      ], {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
    }
  };