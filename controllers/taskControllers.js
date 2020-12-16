const mongoose = require("mongoose");
const TaskSchema = require("../models/taskModel");

const getAllTasks = (req, res, next) => {
  console.log("Controller reached");
  res.send("Controller response");
};

const createTask = (req, res, next) => {
  let newTask = new TaskSchema({ taskName: req.body.taskName });
  newTask
    .save()
    .then((data) => {
      console.log("Current Object", data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("New Task Created");
};

module.exports = {
  getAllTasks,
  createTask,
};
