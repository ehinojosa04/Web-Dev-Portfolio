const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + "/public/HTML/index.html");
});

app.post("/calculation", (req, res) =>{
    var w = req.body.weight;
    var h = req.body.height;
    res.write("<h1>Your BMI is: " + (w / (h)^2)*10000 + "</h1>");
    res.send();
});

app.listen(3000, ()=>{
    console.log("Listening to port 3000")
});