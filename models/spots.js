const mongoose = require("../db/connection");

const spotSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  region: { type: String, required: true },
  name: { type: String, required: true },
});
const Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;
