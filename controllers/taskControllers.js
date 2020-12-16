const mongoose = require("mongoose");
const TaskSchema = require("../models/taskModel");

const getAllTasks = (req, res, next) => {
  TaskSchema.find(req.query)
    .then((data) => {
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

const deleteTask = (req, res, next) => {
  TaskSchema.findOneAndDelete({ taskId: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
};
