'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lists extends Model {
    
  }
  lists.init({
    listname: DataTypes.STRING,
    listitem1: DataTypes.STRING,
    listitem2: DataTypes.STRING,
    listitem3: DataTypes.STRING,
    listitem4: DataTypes.STRING,
    listitem5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lists',
  });
  return lists;
};