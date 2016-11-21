// main NodeJS variables, we'll be using Express
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

// make more routes for POST requests from AJAX, for example...

// start server on whatever port we have on process.env.PORT (important for Heroku hosting!) or 80 for local debugging: just run node server.js on this folder and browse to localhost, done!
http.Server(app).listen(process.env.PORT || 80, function() {
  // show an informative log on console server-side
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
