const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = config.db.url;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Mongodb is Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });
