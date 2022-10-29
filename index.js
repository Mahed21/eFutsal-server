const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pszjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("eFutsal");
    const userCollection = database.collection("booking");
    const IndoorCollection = database.collection("indoor");
    const AdminCollection = database.collection("admin");
    const TeamCollection = database.collection("team");
    console.log("connected");

    //get api
    app.get("/booking", async (req, res) => {
      const cursor = userCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/admin", async (req, res) => {
      const cursor = AdminCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });

    app.post("/booking", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });
    app.get("/booking/:date", async (req, res) => {
      const date = req.params.date;
      const dateQuery = { date: date };
      const result = await userCollection.find(dateQuery).toArray();
      res.send(result);
    });

    //indoor post
    app.post("/indoor", async (req, res) => {
      const userData = req.body;
      const result = await IndoorCollection.insertOne(userData);
      res.send(result);
    });
    //indoor get
    app.get("/indoor", async (req, res) => {
      const cursor = IndoorCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });

    // team informatio
    app.post("/team", async (req, res) => {
      const newUser = req.body;
      const result = await TeamCollection.insertOne(newUser);
      res.send(result);
    });
    app.get("/team", async (req, res) => {
      const cursor = TeamCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
