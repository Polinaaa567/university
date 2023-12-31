const express = require("express");
const app = express();
const Article = require("./Schema");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/lab9_article");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Token");
  next();
});

app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find().exec();
    res.json(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

process.on("SIGINT", async() => {
      
  await mongoose.disconnect();
  console.log("Приложение завершило работу");
  process.exit();
});