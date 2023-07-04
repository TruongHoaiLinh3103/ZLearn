const express = require("express");
const { Users } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", async(req,res) => {
    const listUser = await Users.findAll()
    res.json(listUser)
})
router.post("/", async (req, res) => {
    try {
        const { fullname, useName, email, password, confirmPassword } = req.body;
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                fullname: fullname,
                useName: useName,
                email: email,
                password: hash,
                confirmPassword: hash
            })
            res.json("Success!")
        })
    } catch (error) {
        res.send(error)
    }
});

router.post("/login", async (req, res) => {
    try {
        const {useName, password} = req.body;
        const user = await Users.findOne({where: {useName: useName}})
        if(!user){
            res.json("Tài khoản không chính xác!")
        }
        else{
            bcrypt.compare(password, user.password).then((same) => {
                if(!same){
                    res.json("Tài khoản sai hoặc mật khẩu không chính xác!")
                }
                else{
                    res.json("Login success!");
                }
            })
        }

    } catch (error) {
        res.send(error)
    }
})
module.exports = router;