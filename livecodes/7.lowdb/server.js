import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

//DB ----------------------------------

/** SETTING UP LOWDB */
//lowdb
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { records: [] };
//
//--------------------------------------

//CRUD - Create, Read, Update, Delete

//Create
app.post("/low", async (req, res, next) => {
  const { records } = db.data;
  records.push({ ...req.body, id: Date.now().toString() });
  await db.write();
  res.send(records);
});

//Read
app.get("/low", (req, res, next) => {
  const { records } = db.data;
  res.send(records);
});

//Update
app.put("/:id", async (req, res) => {
  const { records } = db.data;
  const record = await records.find((v) => v.id === req.params.id);

  const { title, artist, year } = req.body;
  record.title = title;
  record.artist = artist;
  record.year = year;

  await db.write();

  res.send(records);
});

//Delete
app.delete("/:id", async (req, res) => {
  const { records } = db.data;

  const removeIndex = records.findIndex((item) => item.id === req.params.id);

  if (removeIndex != -1) {
    records.splice(removeIndex, 1);
  }

  await db.write();
  res.send(records);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on port: ", port));
