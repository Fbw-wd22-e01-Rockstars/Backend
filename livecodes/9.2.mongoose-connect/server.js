import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/postRoutes.js";

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/posts", postRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(port, console.log(`DB connected and listening on ${port} port`)),
  )
  .catch((err) => console.log(`${err} did not connect ...`));

const port = process.env.PORT;
