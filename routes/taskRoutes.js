const express = require("express");
const { getAllTasks, createTask } = require("../controllers/taskControllers");
const taskRouter = express.Router();

taskRouter.route("/tasks").get(getAllTasks).post(createTask);

module.exports = taskRouter;
