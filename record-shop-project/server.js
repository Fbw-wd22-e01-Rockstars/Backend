import express from "express";

import logger from "morgan";
import cors from "cors";

import ordersRouter from "./routes/orders.js";
import recordsRouter from "./routes/records.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

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

db.data ||= { records: [], users: [], orders: [] };
//
//--------------------------------------

//Create
// app.post("/api/records", async (req, res, next) => {
//   const { records } = db.data;
//   records.push({ ...req.body, id: Date.now().toString() });
//   await db.write();
//   res.send(records);
// });

//Read
// app.get("/api/records", (req, res, next) => {
//   const { records } = db.data;
//   res.send(records);
// });
//ROUTES

app.use("/orders", ordersRouter);
app.use("/records", recordsRouter);
app.use("/users", usersRouter);

//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on port: ", port));
