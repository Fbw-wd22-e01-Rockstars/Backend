import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user from "./routes/user.js";
import identifier from "./routes/identifier.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const PORT = process.env.PORT;

app.use("/user", user);
app.use("/identifier", identifier);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Database connected and server running on port: `, PORT),
    ),
  )
  .catch((error) => console.log(error));
