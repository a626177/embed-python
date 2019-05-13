//jshint esversion:6

//module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const _ = require("lodash");

//setting
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//route
app.get("/", function(req, res){
  res.render("home",{pageTitle: "home"});  //,{listTitle: "Hello", listItem:"World!"});
});

app.get("/upload", function(req, res){
  res.render("upload",{pageTitle: "upload"});
});


app.get("/manage", function(req, res){
  res.render("manage",{pageTitle: "manage"});
});

app.get("/analysis", function(req, res){
  res.render("analysis",{pageTitle: "analysis"});
});






//port
let port = process.env.PORT;
if(port == null || port == ""){
 port = 3000;
}

app.listen(port, function() {
  console.log("Server is now started");
});
