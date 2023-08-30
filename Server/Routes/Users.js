const express = require("express");
const { Users } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken")

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
            res.json({error: "Tài khoản không chính xác!"
        })
        }
        else{
            bcrypt.compare(password, user.password).then((same) => {
                if(!same){
                    res.json({error: "Tài khoản sai hoặc mật khẩu không chính xác!"})
                }
                else{
                    const accessToken = sign({useName: user.useName, id: user.id}, "importantsecret");
                    res.json(accessToken);
                }
            })
        }

    } catch (error) {
        res.send(error)
    }
});

router.get("/login/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const user = await Users.findByPk(id);
        res.json(user);
    }
    catch(error){
        res.send(error)
    }
});

module.exports = router;