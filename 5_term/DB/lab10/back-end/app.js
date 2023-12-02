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

// Нужная информация
app.get("/importantdata", async (req, res) => {
  try {
    const articles = await Article.find(
      {},
      { title: 1, author: 1, data: 1 }
    ).exec();
    res.json(articles);
    console.log(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Информация об определённой статье
app.get("/dataspecificarticle/:string", async (req, res) => {
  const id = req.params.string;
  console.log(id);
  try {
    const articles = await Article.find({ _id: id }).exec();
    res.json(articles);
    console.log(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// удаление статьи
app.delete("/deletedata/:string", async (req, res) => {
  const id = req.params.string;
  try {
    const articles = await Article.findOneAndDelete({ _id: id }).exec();
    console.log(articles);
    if (articles) res.json(articles);
    else res.sendStatus(404);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Добавление нового документа
app.get("/insertdata/:title/:author/:body/:tag", async (req, res) => {
  const titleArt = req.params.title;
  const authorArt = JSON.parse(req.params.author) || [];
  const dateArt = new Date();
  const bodyArt = req.params.body;
  const tagsArt = JSON.parse(req.params.tag) || [];

  try {
    const newArticle = new Article({
      title: titleArt,
      author: authorArt,
      data: dateArt,
      body: bodyArt,
      tag: tagsArt,
    });
    const savedArticle = await newArticle.save();
    console.log(savedArticle);
    res.json(savedArticle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Топ 5 статей
app.get("/topfive", async (req, res) => {
  try {
    const articles = await Article.aggregate([
      {
        $addFields: {
          avgRating: { $avg: "$critique.rating" },
        },
      },
      {
        $addFields: {
          sizeCritique: { $size: "$critique" },
        },
      },
      { $sort: { avgRating: -1,  sizeCritique: -1} },
      { $limit: 5 },
      { $project: { title: 1, author: 1, data: 1, avgRating: 1, sizeCritique: 1} },
    ]).exec();
    res.json(articles);
    console.log(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Статьи в интервале
app.get("/datediff/:datebegin/:dateend", async (req, res) => {
  const begin = req.params.datebegin;
  const end = req.params.dateend;
  console.log(new Date(begin));
  console.log(new Date(end));
  try {
    const articles = await Article.find(
      {
        data: { $gte: new Date(begin), $lte: new Date(end) },
      },
      { title: 1, author: 1, data: 1 }
    ).exec();
    res.json(articles);
    console.log(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

process.on("SIGINT", async () => {
  await mongoose.disconnect();

  console.log("Приложение завершило работу");
  process.exit();
});
