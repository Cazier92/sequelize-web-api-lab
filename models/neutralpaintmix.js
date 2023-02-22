'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NeutralPaintMix extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NeutralPaintMix.init({
    paintId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Paints',
        key: 'id'
      }
    },
    neutralMixId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'NeutralMix',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'NeutralPaintMix',
  });
  return NeutralPaintMix;
};