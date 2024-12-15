'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subdist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subdist.init({
    subdist_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    subdist_name: DataTypes.STRING,
    location: DataTypes.STRING,
    owner_id: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subdist',
    tableName: 'm_subdist',
    timestamps: false

  });
  return Subdist;
};