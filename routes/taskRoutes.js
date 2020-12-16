const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskControllers");
const taskRouter = express.Router();

taskRouter.route("/tasks").get(getAllTasks).post(createTask);

taskRouter
  .route("/tasks/:id")
  .get(getTaskById)
  .delete(deleteTask)
  .patch(updateTask);

module.exports = taskRouter;
