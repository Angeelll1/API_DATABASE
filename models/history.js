'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    docno: {type: DataTypes.STRING, primaryKey: true},
    subdist_id: DataTypes.STRING,
    chiller_id: DataTypes.STRING,
    path_image: DataTypes.STRING,
    send_Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'History',
    tableName: 't_chiller_detection',
    timestamps: false
  });
  return History;
};