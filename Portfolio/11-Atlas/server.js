const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

const mongoURL = "mongodb+srv://ehinojosa:4RyVOjzjmmq0uiQs@cluster0.xkvdka1.mongodb.net/?retryWrites=true&w=majority"

