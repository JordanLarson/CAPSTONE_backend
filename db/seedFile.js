const mongoose = require("./connection.js");
const db = mongoose.connection;
const User = require("../models/users");
const Spot = require("../models/spots");
const Feed = require("../models/feed");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await User.deleteMany({});
  await Feed.deleteMany({});

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

  await Spot.deleteMany({});
  const spots = [
    {
      id: 7608,
      region: "Northern California",
      name: "Agate-Beach-Surf-Report",
    },
    {
      id: 7617,
      region: "Northern California",
      name: "Anderson-Beach-Surf-Report",
    },
    {
      id: 7615,
      region: "Northern California",
      name: "Bear-Harbor-Beach-Surf-Report",
    },
    {
      id: 4629,
      region: "Northern California",
      name: "Black-Point-Beach-Surf-Report",
    },
    {
      id: 4221,
      region: "Northern California",
      name: "Bolinas-Surf-Report",
    },
    {
      id: 4215,
      region: "Northern California",
      name: "Bolinas-Jetty-Surf-Report",
    },
    {
      id: 4630,
      region: "Northern California",
      name: "Caspar-Beach-Surf-Report",
    },
    {
      id: 7629,
      region: "Northern California",
      name: "Caspar-Headlands-Surf-Report",
    },
    {
      id: 7610,
      region: "Northern California",
      name: "College-Cove-Surf-Report",
    },
    {
      id: 7620,
      region: "Northern California",
      name: "DeHaven-Creek-Surf-Report",
    },
    {
      id: 4628,
      region: "Northern California",
      name: "Dillon-Beach-Surf-Report",
    },
    {
      id: 302,
      region: "Northern California",
      name: "Eureka-Surf-Report",
    },
    {
      id: 7607,
      region: "Northern California",
      name: "Fern-Canyon-Beach-Surf-Report",
    },
    {
      id: 7627,
      region: "Northern California",
      name: "Glass-Beach-Surf-Report",
    },
    {
      id: 7606,
      region: "Northern California",
      name: "Gold-Bluffs-Beach-Surf-Report",
    },
    {
      id: 7613,
      region: "Northern California",
      name: "Jones-Beach-Surf-Report",
    },
    {
      id: 7628,
      region: "Northern California",
      name: "Jug-Handle-State-Reserve-Surf-Report",
    },
    {
      id: 299,
      region: "Northern California",
      name: "Klamath-River-Surf-Report",
    },
    {
      id: 819,
      region: "Northern California",
      name: "Linda-Mar-Pacifica-Surf-Report",
    },
    {
      id: 7612,
      region: "Northern California",
      name: "Little-River-State-Beach-Surf-Report",
    },
    {
      id: 7624,
      region: "Northern California",
      name: "MacKerricher-Laguna-Point-Surf-Report",
    },
    {
      id: 7623,
      region: "Northern California",
      name: "MacKerricher-Main-Beach-Surf-Report",
    },
    {
      id: 307,
      region: "Northern California",
      name: "Marin-County-Surf-Report",
    },
    {
      id: 7632,
      region: "Northern California",
      name: "Mendocino-Headlands-Surf-Report",
    },
    {
      id: 301,
      region: "Northern California",
      name: "Moonstone-beach-Surf-Report",
    },
    {
      id: 7614,
      region: "Northern California",
      name: "Needle-Rock-Surf-Report",
    },
    {
      id: 255,
      region: "Northern California",
      name: "Ocean-Beach-Surf-Report",
    },
    {
      id: 7609,
      region: "Northern California",
      name: "Palmers-Point-Surf-Report",
    },
    {
      id: 300,
      region: "Northern California",
      name: "Patricks-Point-Surf-Report",
    },
    {
      id: 7603,
      region: "Northern California",
      name: "Pelican-State-Beach-Surf-Report",
    },
    {
      id: 304,
      region: "Northern California",
      name: "Point-Arena-Surf-Report",
    },
    {
      id: 7630,
      region: "Northern California",
      name: "Point-Cabrillo-Surf-Report",
    },
    {
      id: 7626,
      region: "Northern California",
      name: "Pudding-Creek-Beach-Surf-Report",
    },
    {
      id: 7631,
      region: "Northern California",
      name: "Russian-Gulch-Surf-Report",
    },
    {
      id: 306,
      region: "Northern California",
      name: "Salmon-Creek-Surf-Report",
    },
    {
      id: 305,
      region: "Northern California",
      name: "Secrets-Surf-Report",
    },
    {
      id: 4083,
      region: "Northern California",
      name: "Shelter-Cove-Surf-Report",
    },
    {
      id: 298,
      region: "Northern California",
      name: "South-Beach-Surf-Report",
    },
    {
      id: 4216,
      region: "Northern California",
      name: "Stinson-Beach-Surf-Report",
    },
    {
      id: 7622,
      region: "Northern California",
      name: "Ten-Mile-Beach-Surf-Report",
    },
    {
      id: 7604,
      region: "Northern California",
      name: "Tolowa-Dunes-State-Park-Surf-Report",
    },
    {
      id: 7611,
      region: "Northern California",
      name: "Trinidad-State-Beach-Surf-Report",
    },
    {
      id: 7618,
      region: "Northern California",
      name: "Usal-Beach-Surf-Report",
    },
    {
      id: 303,
      region: "Northern California",
      name: "Virgin-Creek-Surf-Report",
    },
    {
      id: 7621,
      region: "Northern California",
      name: "Wages-Creek-Beach-Surf-Report",
    },
    {
      id: 7625,
      region: "Northern California",
      name: "Ward-Ave-Beach-Surf-Report",
    },
    {
      id: 7619,
      region: "Northern California",
      name: "Westport-Union-Landing-Surf-Report",
    },
    {
      id: 7616,
      region: "Northern California",
      name: "Wheeler-Beach-Surf-Report",
    },
    {
      id: 7605,
      region: "Northern California",
      name: "Wilson-Creek-Beach-Surf-Report",
    },
    {
      id: 4562,
      region: "San Diego County",
      name: "Beacons-Surf-Report",
    },
    {
      id: 4209,
      region: "San Diego County",
      name: "Birdrock-Surf-Report",
    },
    {
      id: 4663,
      region: "San Diego County",
      name: "Cardiff-Reef-Surf-Report",
    },
    {
      id: 292,
      region: "San Diego County",
      name: "Carlsbad-Surf-Report",
    },
    {
      id: 3707,
      region: "San Diego County",
      name: "Del-Mar-Surf-Report",
    },
    {
      id: 4564,
      region: "San Diego County",
      name: "Grandview-Surf-Report",
    },
    {
      id: 4210,
      region: "San Diego County",
      name: "Horseshoe-Surf-Report",
    },
    {
      id: 3745,
      region: "San Diego County",
      name: "Imperial-Beach-Surf-Report",
    },
    {
      id: 297,
      region: "San Diego County",
      name: "Mission-Beach-San-Diego-Surf-Report",
    },
    {
      id: 4563,
      region: "San Diego County",
      name: "Moonlight-Surf-Report",
    },
    {
      id: 4682,
      region: "San Diego County",
      name: "North-Del-Mar-Surf-Report",
    },
    {
      id: 4212,
      region: "San Diego County",
      name: "Ocean-beach-Surf-Report",
    },
    {
      id: 664,
      region: "San Diego County",
      name: "Oceanside-Surf-Report",
    },
    {
      id: 4793,
      region: "San Diego County",
      name: "Oceanside-Harbor-Surf-Report",
    },
    {
      id: 663,
      region: "San Diego County",
      name: "Pacific-Beach-Surf-Report",
    },
    {
      id: 4213,
      region: "San Diego County",
      name: "Point-Loma-Surf-Report",
    },
    {
      id: 1149,
      region: "San Diego County",
      name: "Ponto-Surf-Report",
    },
    {
      id: 4900,
      region: "San Diego County",
      name: "San-Clemente-State-Beach-Surf-Report",
    },
    {
      id: 4192,
      region: "San Diego County",
      name: "San-Onofre-Surf-Report",
    },
    {
      id: 296,
      region: "San Diego County",
      name: "Scripps-Pier-La-Jolla-Surf-Report",
    },
    {
      id: 294,
      region: "San Diego County",
      name: "Solana-Beach-Surf-Report",
    },
    {
      id: 4211,
      region: "San Diego County",
      name: "Sunset-Cliffs-Surf-Report",
    },
    {
      id: 293,
      region: "San Diego County",
      name: "Swamis-Surf-Report",
    },
    {
      id: 7105,
      region: "San Diego County",
      name: "Terra-Mar-Surf-Report",
    },
    {
      id: 295,
      region: "San Diego County",
      name: "Torrey-Pines-Blacks-Beach-Surf-Report",
    },
    {
      id: 291,
      region: "San Diego County",
      name: "Trestles-Surf-Report",
    },
    {
      id: 4214,
      region: "San Diego County",
      name: "Windansea-Beach-Surf-Report",
    },
  ];

  await Spot.insertMany(spots);
  console.log("Created some Spots, yeehaw!");
};

const run = async () => {
  await main();
  db.close();
};

run();
