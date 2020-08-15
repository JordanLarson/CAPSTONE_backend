const mongoose = require("./connection.js");
const db = mongoose.connection;
const User = require("../models/users");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await User.deleteMany({});

  const users = [
    {
      username: "JohnnyTsunami",
      password: "password",
    },
    {
      username: "DaveSurfs12",
      password: "password",
    },
    {
      username: "KookNumber1",
      password: "password",
    },
  ];

  await User.insertMany(users);
  console.log("Created some Users, yeehaw!");
};
const run = async () => {
  await main();
  db.close();
};

run();
