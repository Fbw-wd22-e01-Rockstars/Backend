const express = require("express");
const app = express();

// Task 3 - Add a GET request to '/hello'
app.get("/hello", (req, res) => {
  res.send("Good afternoon from the server 🤖");
});

// Task 4 - Add a GET request to '/time'
app.get("/time", (req, res) => {
  const date = new Date();
  const time = date.toLocaleString();
  res.send(time);
});

// Task 5 - Add a GET request to '/random'
app.get("/random", (req, res) => {
  const random = Math.floor(Math.random() * 100);
  res.send(`Random Number: ${random}`);
});

// Task 6 - Add a GET request to '/isNumber'
app.get("/isNumber/:value", (req, res) => {
  const { value } = req.params;

  if (isNaN(Number(value))) {
    res.send(`"${value}" is not a number`);
  } else {
    res.send(`${value} is a number`);
  }
});

app.listen(5000, () => {
  console.log("The server is listening... 🐒");
});
