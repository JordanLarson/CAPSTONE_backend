const mongoose = require("../db/connection");

const feedSchema = new mongoose.Schema({
  message: { type: String, required: true },
  sender: { type: String, required: true },
});

const Feed = mongoose.model("Message", feedSchema);

module.exports = Feed;
