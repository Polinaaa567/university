const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

// const { services, building, company, guest, contract, booking, complaints, popularity, expenses} = require("./model");

const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Token");
  next();
});

(async () => {
  try {
    await mongoClient.connect();
    app.locals.collection = mongoClient.db("Semestr");
    // console.log(app.locals.collection.collection("services"));
    app.listen(3000);
    console.log("Сервер ожидает подключения...");
  } catch (err) {
    return console.log(err);
  }
})();

app.get("/allcollection", async (req, res) => {
  let data = [];
  try {
    const db = mongoClient.db("Semestr");
    data = await db.listCollections().toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/alldata/:collection_name", async (req, res) => {
  const collections = req.params.collection_name;
  try {
    const collection = app.locals.collection.collection(collections);
    const data = await collection.find({}).toArray();
    if (!data) res.json("Collection not found");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// удаление данных
app.delete("/deletedata/:collection_name/:id", async (req, res) => {
  const id = req.params.id;
  const collections = req.params.collection_name;

  try {
    const collection = app.locals.collection.collection(collections);
    const data = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    if (!data) res.sendStatus("Collection not found");
    res.json(data);
    console.log("УДАЛИЛА: ", data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// добавление данных
app.post("/insertdata/:collection_name", async (req, res) => {
  const collections = req.params.collection_name;
  let req_data = req.body;
  console.log(req_data);
  console.log(collections);
  try {
    const collection = app.locals.collection.collection(collections);
    const data = await collection.insertOne(req_data);

    res.json(data);
    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Изменение данных
app.post("/updatedata/:collection_name/:id", async (req, res) => {
  const id = req.params.id;
  const collections = req.params.collection_name;
  const req_data = req.body;

  try {
    const collection = app.locals.collection.collection(collections);
    const data = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req_data }
    );
    res.json(data);
    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// отключиться
process.on("SIGINT", async () => {
  await mongoClient.close();

  console.log("Приложение завершило работу");
  process.exit();
});
