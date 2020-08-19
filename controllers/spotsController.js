const express = require("express");
const router = express.Router();
const Spot = require("../models/spots");
const Axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const region = req.query.region;
    const waveHeight = req.query.waveHeight;
    const stars = req.query.stars;

    if (waveHeight === undefined && stars === undefined) {
      if (region === undefined) {
        return res.status(200).json(await Spot.find());
      } else {
        return res.status(200).json(await Spot.find({ region: region }));
      }
    }

    if (region === undefined) {
      return res.status(500).send("region cannot be undefined");
    }

    let spots = await Spot.find({ region: region });
    // spots = spots.slice(0, 3); // only 3 spots to help avoid spamming magic seaweed
    console.log(spots);

    //inspired by tutorial at https://futurestud.io/tutorials/node-js-how-to-run-an-asynchronous-function-in-array-map
    const promises = spots.map(async (spot) => {
      const response = await Axios(
        "https://magicseaweed.com/api/66c79af0fe4e3fb73b3915ea2ef63999/forecast/?fields=swell.maxBreakingHeight,solidRating,fadedRating&spot_id=" +
          spot.id
      );

      return {
        id: spot.id,
        name: spot.name,
        region: spot.region,
        report: response.data[0],
      };
    });

    const results = await Promise.all(promises);

    const filtered = results.filter((spot) => {
      if (spot.report.swell.maxBreakingHeight < waveHeight) {
        return false;
      }

      if (spot.report.solidRating + spot.report.fadedRating < stars) {
        return false;
      }

      return true;
    });

    return res.status(200).json(filtered);
  } catch (error) {
    console.log("error");
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const spot = await Spot.findOne({ id: req.params.id });
    if (!spot) {
      return res
        .status(404)
        .send("Spot with the specified spot_ID does not exist");
    }

    const magicseaweedResponse = await Axios(
      "http://magicseaweed.com/api/66c79af0fe4e3fb73b3915ea2ef63999/forecast/?fields=swell.minBreakingHeight,swell.maxBreakingHeight,swell.components.combined.height,swell.components.combined.period,swell.components.combined.compassDirection,condition.temperature,wind.speed,wind.compassDirection,charts.swell,charts.wind,solidRating,fadedRating&spot_id=" +
        spot.id
    );

    response = {
      id: spot.id,
      name: spot.name,
      region: spot.region,
      report: magicseaweedResponse.data[0],
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
