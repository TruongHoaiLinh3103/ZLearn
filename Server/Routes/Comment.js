const express = require("express");
const { Comment } = require("../models");
const router = express.Router();
const {validateToken} = require("../middlewares/authMiddlewares")

router.get("/:productId", async(req, res) => {
    const productId = req.params.productId;
    const comments = await Comment.findAll({where: {ProductId: productId}})
    res.json(comments)
});

router.post("/", validateToken, async(req, res) => {
    const post = req.body;
    const username = req.user.useName;
    post.username = username;
    await Comment.create(post);
    res.json(post)
});

router.delete("/cmt/:id", validateToken, async (req, res) => {
    try{
        const commentID = req.params.id;
        await Comment.destroy({
            where: {
                id: commentID,
            }
        })
        res.json("DELETED SUCCESSFULLY");
    }
    catch (error) {
        res.send(error)
    }

});
module.exports = router;