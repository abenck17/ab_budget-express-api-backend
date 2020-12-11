const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const user_incomeModel = require("../models").user_income;
const user_expenseModel = require("../models").user_expense;


// GET user_expense PROFILE
router.get("/profile/:id", async (req, res) => {
  let user_expense = await user_expenseModel.findByPk(req.params.id, {
    include: [{ model: UserModel, attributes: ["id", "name"] }],
  });
  res.json({ user_expense });
});

// GET ALL user_expenses
router.get("/", async (req, res) => {
  let allUserExpenses = await user_expenseModel.findAll();
  res.json({ allUserExpenses });
});

// CREATE A NEW user_expenses
router.post("/", async (req, res) => {
  let newUserExpense = await user_expenseModel.create(req.body);
  res.json({ newUserExpense });
});

// UPDATE A user_expenses
router.put("/:id", async (req, res) => {
  let updatedUserExpense = await user_expenseModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let user_expense = await user_expenseModel.findByPk(req.params.id);
  res.json({ user_expense });
});

// DELETE A user_expenses
router.delete("/:id", async (req, res) => {
  await user_expenseModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `user_expense with id ${req.params.id} was deleted`,
  });
});

module.exports = router;