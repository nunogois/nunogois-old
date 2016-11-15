// Main objects...
var express = require('express');
var app = express();
var http = require('http');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Index page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Start server ...
http.Server(app).listen(process.env.PORT || 80, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
