import express from "express";
import { validationResponse } from "./controllers/userController.js";
import { isAdult, validateKeys } from "./middleware/validation.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

//ROUTES
app.post("/validateuser", isAdult, validateKeys, validationResponse);
//app.post("/sanitizeuser", controller2)

//Global Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      msg: err.message,
    },
  });
});

app.listen(port, () => console.log("Listening on port: ", port));
