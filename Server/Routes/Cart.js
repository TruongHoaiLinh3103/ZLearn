const express = require("express");
const router = express.Router();
const { Cart } = require("../models")

router.get("/", async (req, res) => {
    const listCart = await Cart.findAll()
    res.json(listCart)
})

router.post("/", async (req, res) => {
    const post = req.body
    await Cart.create(post)
    res.json(post)
})

module.exports = router;