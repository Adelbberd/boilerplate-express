let express = require('express');
let app = express();

console.log('Hello World');

// Root-level request logger middleware.
app.use(function(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

// app.get('/', function(req, res){
//   res.send("Hello Express")
// });

// Serve an HTML file.
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/views/index.html')
// });

// Serve static assets with middleware.
// app.use('/public',express.static(__dirname + '/public'));

//Serve a json object.

// Environment variables (hidden)
app.get('/json', function(req, res){
const mySecret = process.env['MESSAGE_STYLE'];
if(mySecret == 'uppercase') {
  res.json({message: "HELLO JSON"});
  
} else {
  res.json({message: "Hello json"});
}
});

// Chain Middleware to create time server.
app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  next();
},
  function(req, res){
  res.send({time : req.time});
})

// Get Route params from user or client.
app.get('/:word/echo', function(req, res){
  res.send({echo: req.params.word});
})

module.exports = app;
