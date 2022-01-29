var express = require('express');
var bp = require('body-parser');

var app = express();

app.listen(8091,function(){
	console.log("server started on 8081");
});

app.get('/index',function(req,res){
   
    res.sendFile(__dirname+"/index.html");
});

app.all('*',function(req,res){
    res.send("Invalid URL");
});