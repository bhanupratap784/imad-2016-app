var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/info.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'info.html'));
});

app.get('/ui/resume.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'resume.html'));
});
app.get('/ui/articleone.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
#Webhooks
