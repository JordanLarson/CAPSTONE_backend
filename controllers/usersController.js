const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.json({ users });
  } catch (error) {
    console.log("error");
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("User deleted");
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await new User(req.body);
    await newUser.save();
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updated) => {
      if (error) console.log(error);
      else res.send(updated);
    }
  );
});

router.get("/login", async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    const logged_in_user = await User.find({
      username: username,
      password: password,
    });
    console.log("logged_in_user: " + logged_in_user);
    if (logged_in_user) {
      return res.status(200).json(logged_in_user[0]);
    }
    return res.status(404).send("User with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("User with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username: username });
    if (user) {
      return res.status(200).json({ user });
    }
    return res
      .status(404)
      .send("User with the specified username does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
