'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comments.init({
    userid: DataTypes.INTEGER,
    con_id: DataTypes.INTEGER,
    comment_user: DataTypes.STRING,
    comment_con: DataTypes.STRING,
    jobid:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};