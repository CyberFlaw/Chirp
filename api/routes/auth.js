const express = require("express");
const User = require("../model/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Api data lib... ");
});

router.post("/register", async (req, res) => {
  const user = new User({
    email: req.body.email,
    user: req.body.user,
    pass: req.body.pass,
    date: res.body.date,
  });
  try {
    const saveUser = await user.save();
    res.status(200).send("Requst Successfull... ", saveUser);
  } catch (err) {
    res.status(400).send("An error popped up... ", err);
  }
});

module.exports = router;
