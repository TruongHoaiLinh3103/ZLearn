const express = require('express');
const cors = require("cors");
const app = express()
const morgan = require('morgan')
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

const db = require("./models")

const postRouter = require("./Routes/Posts");
app.use("/product", postRouter) 
const commentRouter = require("./Routes/Comment");
app.use("/comment", commentRouter);
const cartRouter = require("./Routes/Cart");
app.use("/cart", cartRouter);
const authRouter = require("./Routes/Users")
app.use("/auth", authRouter);

db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Server running on 4000!")
  });
});