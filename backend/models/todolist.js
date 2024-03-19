'use strict';

const { ToDoList } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  ToDoList.init({
    TodolistId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    listname: DataTypes.STRING,
    listitem1: DataTypes.STRING,
    listitem2: DataTypes.STRING,
    listitem3: DataTypes.STRING,
    listitem4: DataTypes.STRING,
    listitem5: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'ToDoList',
  });
  return ToDoList;
};