// main variables
var express = require('express');
var app = express();
var http = require('http');

var path = require('path');

// set public folder for assets
app.use(express.static(path.join(__dirname, 'public')));

// route index page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// start server
http.Server(app).listen(process.env.PORT || 80, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
