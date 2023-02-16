'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mixture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mixture.belongsToMany(models.Paint, {
        as: 'paints',
        through: models.PaintMixture,
        foreignKey: 'mixtureId'
      })
    }
  }
  Mixture.init({
    name: DataTypes.STRING,
    // paint_1_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   onDelete: 'CASCADE',
    //   references: {
    //     model: 'Paints',
    //     key: 'id'
    //   }
    // },
    // paint_2_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   onDelete: 'CASCADE',
    //   references: {
    //     model: 'Paints',
    //     key: 'id'
    //   }
    // },
    // paint_3_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   onDelete: 'CASCADE',
    //   references: {
    //     model: 'Paints',
    //     key: 'id'
    //   }
    // },
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mixture',
  });
  return Mixture;
};