// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const response = express();
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname+"/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get('/505', function(req, res){
  res.sendFile(__dirname + '/public/error/505/index.html');
});
app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/error/404/index.html');
});
