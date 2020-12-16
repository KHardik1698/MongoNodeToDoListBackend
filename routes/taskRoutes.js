const express = require("express");
const taskRouter = express.Router();

taskRouter.route("/").get((req, res) => {
  console.log("Get request reached");
  res.send("Task Get Response");
});

module.exports = taskRouter;
