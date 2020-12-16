const mongoose = require("mongoose");
const TaskSchema = require("../models/taskModel");

const getAllTasks = (req, res, next) => {
  TaskSchema.find({})
    .then((data) => {
      console.log("Data sent");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
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
  res.send(`New Task Created : ${req.body.taskName}`);
};

module.exports = {
  getAllTasks,
  createTask,
};
