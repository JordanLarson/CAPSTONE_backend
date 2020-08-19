const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: [Number], required: false },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
