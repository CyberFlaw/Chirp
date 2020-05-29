const express = require("express");
const mongoos = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.send("Yello");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`An error occoured: ${err}`);
  } else {
    console.log("Database connection started...");
  }
});
