'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Paints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      pigment_code: {
        type: Sequelize.STRING
      },
      pigment_number: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      transparency: {
        type: Sequelize.INTEGER
      },
      staining: {
        type: Sequelize.INTEGER
      },
      granulation: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Paints');
  }
};