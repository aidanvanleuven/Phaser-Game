var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(__dirname + "/public"));

app.listen(8080, function(){
    console.log("Listening on port: " + "8080");
});