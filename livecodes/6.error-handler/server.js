import express from "express";
import morgan from "morgan";

import orderRoutes from "./routes/routes.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//http://localhost:5000/orders
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Hey! Page Not Found!");
  error.status = 404;
  next(error);
});

//Global error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      msg: error.message,
    },
  });
});

app.listen(port, () => console.log(`Listening on port: `, port));
