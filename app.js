const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRoutes");
dotenv.config({ path: "./config.env" });
const app = express();

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, connection) => {
    if (err) {
      return console.log("Error in connecting to the Database.");
    }
    console.log("Connection to the Database was Successful.");
  }
);

app.use("/todoList", taskRouter);

app.listen(
  process.env.PORT,
  console.log(`Express Server running at PORT ${process.env.PORT}`)
);
