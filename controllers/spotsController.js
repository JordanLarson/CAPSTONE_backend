const express = require("express");
const router = express.Router();
const Spot = require("../models/spots");

router.get("/", async (req, res) => {
  try {
    const spots = await Spot.find();
    return res.json({ spots });
  } catch (error) {
    console.log("error");
    return res.status(500).send(error.message);
  }
});

router.get("/:spot_id", async (req, res) => {
  try {
    const { spot_id } = req.params;
    const spot = await Spot.findById(id);
    if (spot) {
      return res.status(200).json({ spot });
    }
    return res
      .status(404)
      .send("Spot with the specified spot_ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
