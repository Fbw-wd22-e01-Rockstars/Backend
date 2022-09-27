import express from "express";
import cors from "cors";
//import { auth } from "./middleware/auth.js";
import items from "./routes/items.js";

import toys from "./routes/products.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

//GET and POST
// http://localhost:5000/items
app.use("/items", items);

//http://localhost:5000/products
app.use("/products", toys);
// app
//   .route("/items/books")
//   .get((req, res) => {})
//   .post((req, res) => {});

// app
//   .route("/items/books/:bookid")
//   .get((req, res) => {})
//   .put((req, res) => {});

//http://localhost:5000/
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   if (username === "dilshod" && password === "1234") {
//     res.send(`Login success! Hello ${username}`);
//   } else {
//     res.send("Login failed!");
//   }
// });

// app.get("/foo/:id", auth, (req, res) => {
//   const id = req.userId;
//   res.send(`The user id is: ${id}`);
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Port is listening: ", port));
