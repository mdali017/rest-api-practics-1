const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/userRoute");
require("./config/db");
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route:
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// client Error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Wrong...",
  });
});

module.exports = app;
