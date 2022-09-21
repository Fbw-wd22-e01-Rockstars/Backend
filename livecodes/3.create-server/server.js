import express from "express"
import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = 5000;

app.get("/", (req, res)=>{   
    res.send("Home page!")
})

//res.sendFile()
app.get("/file", (req, res)=>{
    console.log(__dirname);   
    res.sendFile(__dirname+"/index.html")
})

//res.json()
app.get("/json", (req, res)=>{    
    res.json({msg:"Hello!"})
})

//req.params.id
app.get("/:id", (req, res)=>{ 
    console.log(req.params.id);  
    res.send("Good morning " + req.params.id)
})

//res.send()
app.get("/banana", (req, res)=>{
    res.send("Banana!")
})


app.listen(port, ()=>console.log("Listening on port ", port))




