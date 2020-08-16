const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const usersController = require("./controllers/usersController");
const spotsController = require("./controllers/spotsController");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

app.use("/api/users", usersController);
app.use("/api/spots", spotsController);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
