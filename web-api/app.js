var express = require("express");
var app = express();

const hostname = '127.0.0.1';
const port = 3001;

app.listen(port, hostname, () => {
    console.log("Server running on port " + port);
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/time", (req, res, next) => {
    console.log("time called");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Credentials","*");
    res.setHeader("Access-Control-Allow-Method","GET,POST,PUT,PATCH,DELETE");
    res.json({time: new Date().getHours() + ":" + new Date().getMinutes()});
});