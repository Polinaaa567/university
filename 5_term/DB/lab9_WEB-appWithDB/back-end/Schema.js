const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: { type: String },
  author: [{ type: String }],
  data: { type: Date },
  body: { type: String },
  tag: [{ type: String }],
  critique: [
    {
      user_name: { type: String },
      text_message: { type: String },
      rating: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Article", ArticleSchema);
