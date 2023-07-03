const express = require("express");
const { Product } = require("../models")
const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const listOfPosts = await Product.findAll();
        res.json(listOfPosts);
    }
    catch(error){
        res.send(error)
    }
});

router.get("/byID/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const post = await Product.findByPk(id);
        res.json(post);
    }
    catch(error){
        res.send(error)
    }
});

router.post("/", async (req,res) => {
    try{
        const post = req.body;
        await Product.create(post);
        res.json(post);
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router;