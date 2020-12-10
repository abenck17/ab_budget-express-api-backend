'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_income.belongsTo(models.User, { foreignKey: "user_id" });
    }
  };
  user_income.init({
    user_id: DataTypes.INTEGER,
    income_name: DataTypes.STRING,
    income_type: DataTypes.STRING,
    income_reocurrence: DataTypes.INTEGER,
    income_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_income',
  });
  return user_income;
};