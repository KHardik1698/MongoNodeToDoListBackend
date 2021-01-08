const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRoutes");
dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json());
app.use("/todoList", taskRouter);

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, connection) => {
    if (err) {
      return console.log("Error in connecting to the Database. Express Server not Started.");
    }
    console.log("Connection to the Database was Successful.");
    app.listen(process.env.PORT, console.log(`Express Server running at PORT ${process.env.PORT}`));
  }
);
