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

const getTaskById = (req, res, next) => {
  TaskSchema.findById(req.params.id)
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
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
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

const updateTask = (req, res, next) => {
  TaskSchema.findByIdAndUpdate(
    req.params.id,
    { status: "Completed" },
    { useFindAndModify: false, new: true }
  )
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
