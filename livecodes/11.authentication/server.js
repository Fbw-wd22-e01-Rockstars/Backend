import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT;

//http://localhost:5000/user
app.use("/user", user);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("DB connected and serevr listening on port: ", PORT),
    );
  })
  .catch((err) => console.log(err));
