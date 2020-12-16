const mongoose = require("mongoose");

const getAllTasks = (req, res, next) => {
  console.log("Controller reached");
  res.send("Controller response");
};

module.exports = {
  getAllTasks,
};
