const router = require("express").Router();
const Orders = require("../models/Orders.js");

router.get("/orders", (req, res) => {
    Orders.find({})
    .then(orders =>{
        res.json(orders);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

router.post("/api/orders/bulk", (req, res) => {
    Orders.insertMany(req.body)
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

module.exports = router;