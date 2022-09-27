import express from "express";

let router = express.Router();

//http://localhost:5000/items/books

router
  .route("/books")
  .get((req, res) => {
    res.json("This is GET request and url is /items/books");
  })
  .post((req, res) => {
    res.send("Post request. Url /items/books ...");
  });

router
  .route("/books/:bookid")
  .get((req, res) => {
    res.send(`Book id is: ${req.params.bookid}`);
  })
  .put((req, res) => {
    res.send(`Book with id ${req.params.bookid} updated!`);
  });

export default router;
