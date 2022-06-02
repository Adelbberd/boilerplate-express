let express = require('express');
let app = express();

console.log('Hello World');

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


app.get('/json', function(req, res){
const mySecret = process.env['MESSAGE_STYLE'];
if(mySecret == 'uppercase') {
  res.json({message: "HELLO JSON"});
  
} else {
  res.json({message: "Hello json"});
}
});

module.exports = app;
