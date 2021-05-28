const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connect to DB!")
);

//Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
