const express = require("express");
const router = express()
const {authPage, authNumber} = require("../middlewares/test2");
const list = require("../model/test");
router.get("/", authPage(["admin"]), (req, res) => {
    res.json({
        data: [
            {
                id: 1,
                name: "Trương Hoài Linh",
                age: 20
            },
            {
                id: 2,
                name: "Nguyễn Thị Kiều Thu",
                age: 20
            },
        ]
    })
})
router.get("/:number",authNumber , (req, res) => {
    const textNumber = req.params.number;
    res.json(`You have ${textNumber}`)
})

// const controllers = require("../controllers/test")
// router.get("/", controllers.get)
// router.post("/", (req, res) => {
//     const addUser = req.body;
//     list.push(addUser);
//     res.json(list);
// })
// router.put("/", (req, res) => {
//     const newName = req.body.name;
//     for(let i = 0; i < list.length; i++){
//         if(list[i].name === "Trương Hoài Linh"){
//             list[i].name = newName; 
//         }
//     }
//     res.json(list)
// })
// router.delete("/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     let foundId = false;
//     for(let i = 0; i < list.length; i++){
//         if(list[i].id === id){
//             list.splice(i, 1);
//             foundId = true
//         }
//     }
//     if(!foundId){
//         res.status(404).json("No");
//     } else {
//         res.json(list)
//     }
// })

module.exports = router;