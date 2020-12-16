const express = require("express");
const {
  getAllTasks,
  createTask,
  deleteTask,
} = require("../controllers/taskControllers");
const taskRouter = express.Router();

taskRouter.route("/tasks").get(getAllTasks).post(createTask);

taskRouter.route("/tasks/:id").delete(deleteTask);

module.exports = taskRouter;
