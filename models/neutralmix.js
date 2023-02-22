'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NeutralMix extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NeutralMix.belongsToMany(models.Paint, {
        as: 'paints',
        through: models.NeutralPaintMix,
        foreignKey: 'neutralMixId'
      })
    }
  }
  NeutralMix.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NeutralMix',
  });
  return NeutralMix;
};