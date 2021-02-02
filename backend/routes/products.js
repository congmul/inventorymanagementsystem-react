const router = require("express").Router();
const db = require("../models");

// router.get("/orders", (req, res) => {
//     console.log("Route Orders in Backend")
//     db.Orders.find({})
//     .then(orders =>{
//         res.json(orders);
//     })
//     .catch(err => {
//         res.status(404).json(err);
//     })
// })

router.post("/api/product", (req, res) => {
    console.log(req.body);
    db.Products.create(req.body)
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
})

router.post("/api/product/bulk", (req, res) => {
    console.log(req.body);
    db.Products.insertMany(req.body)
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
})

router.post("/api/product/newPack", (req, res) => {
    console.log(req.body);
    db.CymbalPacks.create(req.body)
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
})

router.post("/api/product/newPack/bulk", (req, res) => {
    console.log(req.body);
    db.CymbalPacks.insertMany(req.body)
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
})

module.exports = router;