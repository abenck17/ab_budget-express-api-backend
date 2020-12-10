const express = require("express");
const user_expense = require("../models/user_expense");
const router = express.Router();

const UserModel = require("../models").User;
const user_incomeModel = require("../models").user_income;
const user_expenseModel = require("../models").user_expense;

// GET USER PROFILE // NEED A WAY TO SHOW BOTH !!!!
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id, {
    include: user_incomeModel, 
  }, {
    include: user_expenseModel,
  });
  res.json({ user });
});

// GET ALL USERS
router.get("/", async (req, res) => {
  let users = await UserModel.findAll();
  res.json({ users });
});

// UPDATE A USER
router.put("/:id", async (req, res) => {
  let user = await UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A USER
router.delete("/:id", async (req, res) => {
  await UserModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`,
  });
});

module.exports = router;
