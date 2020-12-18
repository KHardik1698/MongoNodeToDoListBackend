const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskControllers");
const verifyRequestBody = require("../middlewares/validationMiddlewares");
const taskRouter = express.Router();

taskRouter.route("/tasks").get(getAllTasks).post(verifyRequestBody, createTask);

taskRouter
  .route("/tasks/:id")
  .get(getTaskById)
  .delete(deleteTask)
  .patch(verifyRequestBody, updateTask);

module.exports = taskRouter;
