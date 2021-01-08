const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskId: {
    type: String,
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
    default: undefined,
  },
  completedAt: {
    type: Date,
    default: undefined,
  },
});

const TaskSchema = mongoose.model("Task", taskSchema);

module.exports = TaskSchema;
