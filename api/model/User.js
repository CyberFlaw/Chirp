const monoose = require("mongoose");

const dataModel = monoose.Schema({
  email: {
    type: String,
    required: true,
    max: 225,
  },
  user: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  pass: {
    type: String,
    required: true,
    max: 1024,
    min: 8,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = monoose.model("User", dataModel);
