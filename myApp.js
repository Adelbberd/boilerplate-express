let express = require('express');
let app = express();

console.log('Hello World');

// app.get('/', function(req, res){
//   res.send("Hello Express")
// });

// Serve an HTML file.
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html')
});

// Serve static assets with middleware.
app.use('/public',express.static(__dirname + '/public'));

module.exports = app;
