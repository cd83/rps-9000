var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(port, function(){
    console.log("Listening on port %s...", server.address().port);
});

var rps = [
    'rock',
    'paper',
	'scissors'
];

var getrps = Math.floor(Math.random()*rps.length);

function rockPaperScissorsBot () {
    rpsbot = rps[getrps];
}