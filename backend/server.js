const express = require('express');
const logger = require("morgan");
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const PORT = process.env.PORT || 3000;

const WavemgDB = require('./db/schema.js');
const app = express();

app.use(logger("dev"));
// app.use(cors());
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect('process.env.MONGODB_URI || "mongodb://localhost/wavemg', 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});

mongoose.connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get("/", (req, res) => {
    console.log("Get Server")
    WavemgDB.find({})
    .then(res => {
      res.json(res);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// routes
app.use(require("./routes/orders.js"));

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});