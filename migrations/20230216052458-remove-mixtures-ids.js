'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Mixtures', 'paint_1_id')
    await queryInterface.removeColumn('Mixtures', 'paint_2_id')
    await queryInterface.removeColumn('Mixtures', 'paint_3_id')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('Mixtures', 'paint_1_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Paints',
        key: 'id'
      }
    })
    await queryInterface.addColumn('Mixtures', 'paint_2_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Paints',
        key: 'id'
      }
    })
    await queryInterface.addColumn('Mixtures', 'paint_3_id', {
      type: DataTypes.INTEGER,
      allowNull: true,
      onDelete: 'CASCADE',
      references: {
        model: 'Paints',
        key: 'id'
      }
    })
  }
};
