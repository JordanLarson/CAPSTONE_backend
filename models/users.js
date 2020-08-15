const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  //   favorites: [
  //     { fav1: String },
  //     { fav2: String },
  //     { fav3: String },
  //     { fav4: String },
  //     { fav5: String },
  //     { fav6: String },
  //     { fav7: String },
  //     { fav8: String },
  //     { fav9: String },
  //     { fav10: String },
  //   ],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
