import express from "express";
import {
  validationResponse,
  sanitizeResponse,
} from "./controllers/userController.js";
import { isAdult, validateKeys } from "./middleware/validation.js";
import {
  sanitizeName,
  stringstoNumbers,
  sortBands,
} from "./middleware/sanitization.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

//ROUTES
app.post("/validateuser", isAdult, validateKeys, validationResponse);
app.post(
  "/sanitizeuser",
  sanitizeName,
  stringstoNumbers,
  sortBands,
  sanitizeResponse,
);

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
