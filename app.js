const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();

app.listen(
  process.env.PORT,
  console.log(`Express Server running at PORT ${process.env.PORT}`)
);
