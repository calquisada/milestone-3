'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listname: {
        type: Sequelize.STRING
      },
      listitem1: {
        type: Sequelize.STRING
      },
      listitem2: {
        type: Sequelize.STRING
      },
      listitem3: {
        type: Sequelize.STRING
      },
      listitem4: {
        type: Sequelize.STRING
      },
      listitem5: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lists');
  }
};