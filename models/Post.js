const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: { type: String, require: true },
  level: { type: Number, require: true },
  lines: { type: Number, require: true },
  score: { type: Number, require: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Posts", PostSchema);
