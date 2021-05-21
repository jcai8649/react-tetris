const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(express.json());

//Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to React-Tetris Server");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connect to DB!")
);

app.listen(5000);
