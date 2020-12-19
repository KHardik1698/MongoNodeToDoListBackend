const mongoose = require("mongoose");
const TaskSchema = require("../models/taskModel");
const sendResponse = require("../helpers/sendResponse");
const sendErrorMessage = require("../helpers/sendError");
const AppError = require("../helpers/appErrorClass");

const getAllTasks = (req, res, next) => {
  let select = "";
  if (req.query.select) {
    req.query.select.split(" ").forEach((query) => {
      if (!query.includes("__v")) {
        select = select + query + " ";
      }
    });
  } else select = "-__v";
  if (select.length == 0) select = "-__v";
  delete req.query.select;
  TaskSchema.find(req.query)
    .select(`${select} -_id`)
    .then((data) => {
      if (data.length !== 0)
        sendResponse(200, "Get Blogs Data Request Successful", data, req, res);
      else
        sendErrorMessage(
          new AppError(404, "Unsuccessful", "Blog Data not found"),
          req,
          res
        );
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
      if (data)
        sendResponse(200, "Get Blogs Data Request Successful", data, req, res);
      else
        sendErrorMessage(
          new AppError(404, "Unsuccessful", "Blog Data not found"),
          req,
          res
        );
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
      if (data.length !== 0) {
        data = data.toObject();
        delete data._id;
        delete data.__v;
        sendResponse(200, "Blog Created Successfully", data, req, res);
      }
    })
    .catch((err) => {
      console.log(err);
      sendErrorMessage(
        new AppError(
          500,
          "Unsuccessful",
          "Internal Server Error. Blog not Created"
        ),
        req,
        res
      );
    });
};

const deleteTask = (req, res, next) => {
  TaskSchema.findOneAndDelete({ taskId: req.params.id })
    .select("-_id -__v")
    .then((data) => {
      if (data) sendResponse(200, "Blog Deleted Successfully", data, req, res);
      else
        sendErrorMessage(
          new AppError(404, "Unsuccessful", "Blog Data not found"),
          req,
          res
        );
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
      if (data) sendResponse(200, "Blog Updated Successfully", data, req, res);
      else
        sendErrorMessage(
          new AppError(404, "Unsuccessful", "Blog Data not found"),
          req,
          res
        );
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
