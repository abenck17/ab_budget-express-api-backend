"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let user_incomes = await queryInterface.bulkInsert("user_incomes", [
      { user_id: 1, income_name: "Paycheck", income_type: "Work", income_reocurrence: 1, income_amount: 1200 },
      { user_id: 2, income_name: "Paycheck", income_type: "Work", income_reocurrence: 1, income_amount: 1450 },
    ]);

    let user_expenses = await queryInterface.bulkInsert("user_expenses", [
      { user_id: 1, expense_name: "Rent", expense_type: "Living", expense_reocurrence: 1, expense_amount: 750 },
      { user_id: 1, expense_name: "Rent", expense_type: "Living", expense_reocurrence: 1, expense_amount: 950 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Austin" },
      { name: "Zac" },
    ]);

  
  },

  down: async (queryInterface, Sequelize) => {},
};
