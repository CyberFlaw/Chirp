const express = require("express");
const User = require("../model/User");
const { registerValidation } = require("../validation");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Api data lib... ");
});

router.post("/register", async (req, res) => {
  const checkEmailDuplication = await User.findOne({ email: req.body.email });
  const checkUserDuplication = await User.findOne({ user: req.body.user });

  if (checkEmailDuplication) return res.send("The email already exist...");
  if (checkUserDuplication) return res.send("This username already exist...");
  else {
    const { error } = registerValidation(req.body);

    if (error) {
      res.status(400);
      res.send("Woops nice try dude...");
    } else {
      const user = new User({
        email: req.body.email,
        user: req.body.user,
        pass: req.body.pass,
      });
      try {
        const saveUser = await user.save();
        res.status(200);
        res.send("Requst Successfull... ");
      } catch (err) {
        res.status(400);
        res.send("An error popped up... ");
      }
    }
  }
});

module.exports = router;
