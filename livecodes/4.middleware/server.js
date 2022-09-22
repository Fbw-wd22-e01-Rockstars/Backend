//1-step: Write a GET request in order to display index.html
import express from "express";

// import path from "path"
// const __dirname = path.resolve()

const app = express();

//middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

//GET ==> http:localhost:5000/
app.get("/", (req, res)=>{
    //2-tep:create index.html file inside public folder
    res.sendFile("index.html")
})


//3-step: Add style.css

//POST
app.post("/", (req, res)=>{
    //console.log(req.body);
    res.json(req.body)
})


app.listen(5000, ()=>console.log("The server is listening ...🐒, the posrt is 5000"))