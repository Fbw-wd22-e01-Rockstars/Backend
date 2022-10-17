import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import usersRoute from "./routes/usersRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

app.use("/", usersRoute);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("DB connected and listining on port: ", PORT),
    );
  })
  .catch((error) => {
    console.log(error);
  });
