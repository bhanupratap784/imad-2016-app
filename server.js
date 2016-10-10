var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone= {
    title: 'ARticle-one',
    heading: 'Aticle one',
    date: 'october 12,2016',
    content : 'I AM BHANU PRAtAP SINGH'
};
function createtemplate(data) {
    var title= data.title;
    var date= data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate={
    <html>
    <head>
        <title>
            ${title}
            
        </title>
<link href="ui/style.css" rel="stylesheet" />
    </head>

<body>
    <div class="container">
        <div>
        <a href="/ui/index.html">HOME</a>
    </div>
    <h1>
        ${heading}
        
    </h1>
    <div>
        ${date}
    </div>
    <div>
      ${content}
    </div>
    </div>
    
</body>
</html>
};
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function(req,res){
    res.send(createtemplate(articleone));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
