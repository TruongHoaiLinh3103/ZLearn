const express = require("express");
const { Comment } = require("../models");
const router = express.Router();

router.get("/:productId", async(req, res) => {
    const productId = req.params.productId;
    const comments = await Comment.findAll({where: {ProductId: productId}})
    res.json(comments)
});

router.post("/", async(req, res) => {
    const post = req.body;
    await Comment.create(post);
    res.json(post)
});
module.exports = router;