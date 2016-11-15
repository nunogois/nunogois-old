// Main objects...
var express = require('express');
var app = express();
var http = require('http');

var path = require('path');

var config = require('cloud-env');

app.use(express.static(path.join(__dirname, 'public')));

//openshift
//app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);

//app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

port = config.get('PORT', 8080)
bind_address = config.get('IP','127.0.0.1')

// Index page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Start server ...
/*http.listen(process.env.PORT || 80, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});*/

//openshift
http.Server(app).listen(port, bind_address, function(){
  console.log('Express server listening on ' + bind_address + ':' + port);
});
