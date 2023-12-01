const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan');
app.use(morgan('combined'));
// const mysql = require("mysql2");
app.use(express.json());
const PORT = 4000;
app.use(cors());

// DATABASE
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test"
// })

// const checkinfo = (req, res, next) => {
//     const name = req.body.name;
//     if(name === "Khang"){
//         next();
//     }else{
//         res.json({error: "You can't login"})
//     }
// }

// app.get("/text",checkinfo, (req, res) => {
//     db.query("SELECT * FROM text.new_table;", (err, result) => {
//         res.json(result);
//     })
// })
// app.post("/text", (req, res) => {
//     const {id, name, age} = req.body;
//     db.query('INSERT INTO text.new_table (id, name, age) VALUES (?,?,?);', [id,name,age], (err, result) => {
//         res.json(result);
//     })
// })
// app.put("/text/modify/:id", (req, res) => {
//     const id = req.params.id;
//     const name = req.body.name;
//     db.query('UPDATE text.new_table SET name = ? WHERE (id = ?);', [name, id], (err, result) => {
//         res.json(result);
//     })
// })
// app.delete("/text/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM text.new_table WHERE (id = ?);",[id], (err, result) => {
//         res.json(result);
//     })
// })

// YUP
// let temp = []
// const postProfile = require("./middlewares/test2");
// const profile = require("./validations/test");

// app.post("/profile", postProfile(profile), (req, res) => {
//     const post = req.body;
//     temp.push(post);
//     res.json(temp);
// })


// EXPRESS STORY
// const user = require("./routers/test");
// app.use("/user", user);

// UPLOAD IMG
// const multer = require("multer");
// const path  = require("path")
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "Image")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })
// const upload = multer({storage: storage})
// app.set("view engine","ejs");
// app.get("/upload", (req, res) => {
//     res.render("upload");
// })
// app.post("/upload", upload.single("image"), (req, res) => {
//     res.send("Image upload")
// })

// app.listen(PORT, () => {
//     console.log(`Server run on ${PORT}!`)
// })


const db = require("./models")

const postRouter = require("./routers/Posts");
app.use("/product", postRouter) 
const commentRouter = require("./routers/Comment");
app.use("/comment", commentRouter);
const cartRouter = require("./routers/Cart");
app.use("/cart", cartRouter);
const authRouter = require("./routers/Users")
app.use("/auth", authRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}!`)
  });
});