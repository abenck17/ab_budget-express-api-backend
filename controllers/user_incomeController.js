const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const user_incomeModel = require("../models").user_income;
const user_expenseModel = require("../models").user_expense;


// GET user_income PROFILE
router.get("/profile/:id", async (req, res) => {
  let user_income = await user_incomeModel.findByPk(req.params.id, {
    include: [{ model: UserModel, attributes: ["id", "name"] }],
  });
  res.json({ user_income });
});

// GET ALL user_incomes
router.get("/", async (req, res) => {
  let allUserIncomes = await user_incomeModel.findAll();
  res.json({ allUserIncomes });
});

// CREATE A NEW user_incomes
router.post("/", async (req, res) => {
  let newUserIncome = await user_incomeModel.create(req.body);
  res.json({ newUserIncome });
});

// UPDATE A user_incomes
router.put("/:id", async (req, res) => {
  let updatedUserIncome = await user_incomeModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let user_income = await user_incomeModel.findByPk(req.params.id);
  res.json({ user_income });
});

// DELETE A user_incomes
router.delete("/:id", async (req, res) => {
  await user_incomeModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `user_income with id ${req.params.id} was deleted`,
  });
});

module.exports = router;