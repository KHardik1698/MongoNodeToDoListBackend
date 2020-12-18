const mongoose = require("mongoose");
const TaskSchema = require("../models/taskModel");

const getAllTasks = (req, res, next) => {
  let select = "";
  if (req.query.select) {
    select = req.query.select;
  }
  delete req.query.select;
  TaskSchema.find(req.query)
    .select(`-_id -__v ${select}`)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  req.query.select = select;
};

const getTaskById = (req, res, next) => {
  TaskSchema.findOne({ taskId: req.params.id })
    .select("-_id -__v")
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
      data = data.toObject();
      delete data._id;
      delete data.__v;
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteTask = (req, res, next) => {
  TaskSchema.findOneAndDelete({ taskId: req.params.id })
    .select("-_id -__v")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateTask = (req, res, next) => {
  TaskSchema.findOneAndUpdate(
    { taskId: req.params.id },
    { status: req.body.status },
    { useFindAndModify: false, new: true, runValidators: true }
  )
    .select("-_id -__v")
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
