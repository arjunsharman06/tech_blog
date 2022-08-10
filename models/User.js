const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Inheriting from Model Class
class User extends Model {}

User.init(
  {
    // Define Columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 5,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    freezeTableName: true,
  }
);

module.exports = User;
