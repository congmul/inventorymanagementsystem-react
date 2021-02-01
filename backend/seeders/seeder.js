// let mongoose = require("mongoose");
// let db = require("../models");

// mongoose.connect("mongodb://localhost/wavemgDB", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// let cymbalSeed = [
//   {
//     sku: "K0823",
//     date: "10/30/17",
//     product: "cymbal",
//     price: 175,
//     category: "zildjian",
//     buyer: "diyweekend",
//     description: "K custom",
//     shipped: true
//   }
// ];

// // db.Cymbals.deleteMany({})
// //   .then(() => db.Cymbals.collection.insertMany(cymbalSeed))
//   db.Orders.insertMany(cymbalSeed)
//   .then(data => {
//     // console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
