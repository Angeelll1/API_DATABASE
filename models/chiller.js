'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chiller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chiller.init({
    chiller_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    subdist_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Chiller',
    tableName: 'm_chiller',
    timestamps: false
  });
  return Chiller;
};