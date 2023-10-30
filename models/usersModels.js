const mongoose = require("mongoose");

const usersShema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", usersShema);
