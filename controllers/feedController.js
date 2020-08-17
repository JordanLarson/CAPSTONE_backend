const express = require("express");
const router = express.Router();
const Feed = require("../models/feed");

router.get("/", async (req, res) => {
  try {
    senderId = req.query.sender;
    spotId = req.query.spotId;

    const feed = await Feed.find({ spotId: spotId });
    return res.json({ feed });
  } catch (error) {
    console.log("error");
    return res.status(500).send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Feed.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Feed item deleted");
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const newFeedItem = await new Feed(req.body);
    await newFeedItem.save();
    console.log(newFeedItem);
    return res.status(201).json(newFeedItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", (req, res) => {
  Feed.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updated) => {
      if (error) console.log(error);
      else res.send(updated);
    }
  );
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feedItem = await Feed.findById(id);
    if (feedItem) {
      return res.status(200).json({ feedItem });
    }
    return res
      .status(404)
      .send("Feed item with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
