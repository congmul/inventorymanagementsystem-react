const router = require("express").Router();
const db = require("../models");

router.get("/orders", (req, res) => {
    console.log("Route Orders in Backend")
    db.Orders.find({})
    .then(orders =>{
        res.json(orders);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

router.post("/api/orders/bulk", (req, res) => {
    db.Orders.insertMany(req.body)
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

module.exports = router;