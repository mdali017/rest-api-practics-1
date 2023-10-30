const User = require("../models/usersModels");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "All user is Here..",
      users,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne(req.params.id);
    res.status(200).json({
      message: " User is Here..",
      user,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json({
      message: " User is created.",
      newUser,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });

    user.name = req.body.name;
    user.age = Number(req.body.age);

    await user.save();
    res.status(201).json({
      message: " User is created.",
      user,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.deleteOne({ id: req.params.id });
    res.status(200).json({
      message: " User is Here..",
      user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
