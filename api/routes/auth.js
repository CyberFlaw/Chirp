const express = require("express");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pass, salt);

    if (error) {
      res.status(400);
      res.send("Woops nice try dude...");
    } else {
      const user = new User({
        email: req.body.email,
        user: req.body.user,
        pass: hashedPassword,
      });
      try {
        const saveUser = await user.save();
        res.status(200);
        res.send(`Requst Successfull... ${saveUser._id}`);
      } catch (err) {
        res.status(400);
        res.send("An error popped up... ");
      }
    }
  }
});

router.post("/login", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400);
    res.send("Woops nice try dude...");
  } else {
    const getUserFromDB = await User.findOne({ user: req.body.user });
    if (!getUserFromDB) return res.status(400).send("User not found...");

    const validPass = await bcrypt.compare(req.body.pass, getUserFromDB.pass);
    if (!validPass) return res.status(400).send("Password incorrect...");
    else return res.status(200).send("Logged in...");
  }
});

module.exports = router;
