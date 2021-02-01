let mongoose = require("mongoose");
let db = require("../models/Cymbals");

mongoose.connect("mongodb://localhost/wavemgDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let cymbalSeed = [
  {
    category: "K0854",
    description: "K custom"
  },
  {
    category: "K0834",
    description: "K Dark"
  },
  {
    category: "K0154",
    description: "A custom"
  },
];

// db.Cymbals.deleteMany({})
//   .then(() => db.Cymbals.collection.insertMany(cymbalSeed))
  db.insertMany(cymbalSeed)
  .then(data => {
    // console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
