'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paint.belongsToMany(models.Mixture, {
        as: 'mixtures',
        through: models.PaintMixture,
        foreignKey: 'paintId'
      })
      Paint.belongsToMany(models.NeutralMix, {
        as: 'neutralMixes',
        through: models.NeutralPaintMix,
        foreignKey: 'paintId'
      })
      
    }
  }
  Paint.init({
    name: DataTypes.STRING,
    pigment_code: DataTypes.STRING,
    pigment_number: DataTypes.INTEGER,
    color: DataTypes.STRING,
    transparency: DataTypes.INTEGER,
    staining: DataTypes.INTEGER,
    granulation: DataTypes.INTEGER,
    brand: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Paint',
  });
  return Paint;
};