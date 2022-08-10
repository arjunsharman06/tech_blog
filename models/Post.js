const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: false,
    updatedAt: true,
    modelName: 'post',
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
