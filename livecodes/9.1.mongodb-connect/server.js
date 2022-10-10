import express from "express";

import { MongoClient } from "mongodb";

const app = express();
const port = 5000;

const url = "mongodb://localhost:27017";
const dbName = "test5";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//POST
app.post("/", (req, res) => {
  const name = {
    fname: req.body.fname,
    lname: req.body.lname,
  };

  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    collection.insertOne(name);
  });

  res.redirect("/");
});

//GET
app.get("/get", (req, res) => {
  const resultArr = [];
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    const info = collection.find();

    info.forEach(
      function (doc) {
        resultArr.push(doc);
      },
      function () {
        res.json(resultArr);
      },
    );
  });
});

app.listen(port, () => console.log("Listening on port: ", port));
