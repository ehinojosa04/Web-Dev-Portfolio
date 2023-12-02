const express = require('express');
const bodyParser = require ("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

let names = [];
let tasks = [];

app.route("/")
.get((req, res) => res.render("index", { names, tasks }))
.post((req, res) => res.redirect("/"));

app.route("/greet")
.get((req, res) => {
    names.push(req.query.name);
    console.log(req.query.name);
    res.redirect("/");
})
.put((req, res) => {
    names.push(req.query.name);
    console.log(req.query.name);
    res.status(200).json({ names });
});

app.route("/wazzup")
.get((req, res) => res.render("wazzup", { name: req.query.name }));

app.route("/task")
.post((req, res) => {
    tasks.push(req.body.task);
    res.redirect("/");
})
.get((req, res) => {
    tasks.splice(req.query.index, 1);
    res.redirect("/");
})
.delete((req, res) => {
    tasks.splice(req.query.index, 1);
    res.redirect("/");
});

app.route("/up")
.get((req, res) => {
    let index = parseInt(req.query.index);
    if (index === 0 || index > 0 && index < tasks.length) {
        [tasks[index], tasks[(index - 1 + tasks.length) % tasks.length]] = [tasks[(index - 1 + tasks.length) % tasks.length], tasks[index]];
    }
    res.redirect("/");
});

app.route("/down")
.get((req, res) => {
    let index = parseInt(req.query.index);
    if (index === tasks.length - 1 || index >= 0 && index < tasks.length - 1) {
        [tasks[index], tasks[(index + 1) % tasks.length]] = [tasks[(index + 1) % tasks.length], tasks[index]];
    }
    res.redirect("/");
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("There was an error in the app");
});

app.listen(3000, () => console.log("Listening Port 3000"));
