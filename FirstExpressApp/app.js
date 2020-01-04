var express = require("express");
var app = express(); 

app.get("/", function(req,res){
    res.send("Hi there!");
});

app.get("/bye", function(req,res){
    res.send("Goodbye!");
});
app.get("/dog", function(req,res){
        console.log("SOMEONE MADE A REQUEST TO DOG");
    res.send("MEOW!");
});

app.get("/r/:subredditName/comments/:id/:title/",function(req,res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("*",function(req,res){
    res.send("YOU ARE A STAR!!");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
