// main variables
var express = require('express');
var app = express();
var http = require('http');

var path = require('path');

// body parser middleware
var bodyparser = require('body-parser');
app.use(bodyparser.json());

// set public folder for assets
app.use(express.static(path.join(__dirname, 'public')));

// route index page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// route email sending
app.post('/send', function(req, res){
  var api_key = process.env.MAILGUN_API_KEY; // mailgun API key
  var domain = 'mg.nunogois.com';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: req.body.contact_name + ' <portfolio@mg.nunogois.com>',
    to: process.env.PERSONAL_EMAIL, // my personal email address
    subject: req.body.contact_subject,
    text: 'From: ' + req.body.contact_name + ' <' + req.body.contact_email + '>\n\nMessage:\n' + req.body.contact_message
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });

  res.json({success : "Email sent!", status : 200});
});

// start server
http.Server(app).listen(process.env.PORT || 80, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
