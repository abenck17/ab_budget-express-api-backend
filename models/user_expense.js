'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_expense.belongsTo(models.User, { foreignKey: "user_id" });
    }
  };
  user_expense.init({
    user_id: DataTypes.INTEGER,
    expense_name: DataTypes.STRING,
    expense_type: DataTypes.STRING,
    expense_reocurrence: DataTypes.INTEGER,
    expense_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_expense',
  });
  return user_expense;
};