import express from "express";
// set body parser middlware
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.username == "dilshod" && req.body.password == "1234") {
    res.send(`Login success. Hello ${req.body.username}`);
  } else {
    res.send("login failed");
  }
});
// route /about
app.get("/about", (req, res) => {
  res.json({ test: "javascript" });
});
app.get("/contact", (req, res) => {
  res.send(__dirname);
});
//
app.listen(5000, () => {
  console.log("App listening on port 5000 ");
});
