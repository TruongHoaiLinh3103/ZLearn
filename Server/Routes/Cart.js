const express = require("express");
const router = express.Router();
const { Cart } = require("../models");
const {validateToken} = require("../middlewares/authMiddlewares")

// router.get("/:userId", async (req, res) => {
//     const userId = req.params.userId
//     const listCart = await Cart.findAll({where:{UserId: userId}})
//     res.json(listCart)
// })

router.get("/:username", async (req, res) => {
    const username = req.params.username
    const listCart = await Cart.findAll({where:{username: username}})
    res.json(listCart)
})

router.get("/", async (req, res) => {
    const listCart = await Cart.findAll();
    res.json(listCart);
})

router.post("/", validateToken, async (req, res) => {
    const post = req.body
    const username = req.user.useName
    const UserId = req.user.id
    post.username = username
    post.UserId = UserId
    await Cart.create(post)
    res.json(post)
})

module.exports = router;