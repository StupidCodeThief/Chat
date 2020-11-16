const express = require("express");
const mongoose = require("mongoose");

const connectDb = require("./config/db");

const app = express();

connectDb();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

process.on("SIGINT", () => {
  mongoose.connection.close();
  server.close();
});
