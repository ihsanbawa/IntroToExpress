var express = require("express");
var app = express(); 

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:animal",function(req,res){
    var animal = req.params.animal;
    var sound = ""; 
    if(animal === "pig"){
        sound = "'Oink'";
    }else if(animal ==="cow"){
        sound = "'Moo'";
    }else if(animal ==="dog"){
        sound = "'Woof Woof'";
    }
    res.send("The " + animal.toLowerCase() + " says "+ sound);
});


app.get("/repeat/:word/:number",function(req,res){
    var word = req.params.word + " ";
    var number = parseInt(req.params.number);
    var sentence = "";
    for(var i=0; i<number; i++){
        sentence+=word;
    }
    res.send(sentence);
});

app.get("*",function(req,res){
    res.send("Sorry, page not found..What are you doing with your life?");
});


// Assigning a port on the server to listen to 
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
