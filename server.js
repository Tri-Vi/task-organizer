var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send('Hello');
})

app.listen(port, function(err){
  if(err) throw err;
  console.log(`listening on ${port}`);
})
