const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

//submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    level: req.body.level,
    lines: req.body.lines,
    score: req.body.score,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//get a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

//Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//Update a post's name
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { name: req.body.name } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
