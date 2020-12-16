const mongoose = require("mongoose");
const uniqid = require("uniqid");

const taskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    default: "task-" + uniqid(),
  },
  taskName: {
    type: String,
    validate: {
      validator: function (taskName) {
        return this.taskName.trim().length !== 0;
      },
      message: "Task Name should not be an Empty String",
    },
  },
  status: {
    type: String,
    default: "Not Started",
    enum: ["Not Started", "In Progress", "Completed"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startedAt: {
    type: Date,
  },
  completedAt: {
    type: Date,
  },
});

const TaskSchema = mongoose.model("Task", taskSchema);

module.exports = TaskSchema;
