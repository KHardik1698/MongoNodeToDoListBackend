const express = require("express");
const { getAllTasks } = require("../controllers/taskControllers");
const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks);

module.exports = taskRouter;
