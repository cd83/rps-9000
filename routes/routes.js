var appRouter = function(app){
    app.get("/status", function (req, res) {
        console.log("someone hit ye ole status");
        if(req.query.text){
            //var rpsbot = rps[getrps];
            var rpsbot = rockPaperScissorsBot();
            console.log(rpsbot);
            var sendbacktext = "You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            if (rpsbot == 'rock' && req.query.text == 'scissors') {
                var sendbacktext = "YOU LOSE! You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            } else if (rpsbot == 'paper' && req.query.text == 'rock') {
                var sendbacktext = "YOU LOSE! You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            } else if (rpsbot == 'scissors' && req.query.text == 'paper') {
                var sendbacktext = "YOU LOSE! You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            } else if (rpsbot == 'rock' && req.query.text == 'paper') {
                var sendbacktext = "YOU WIN! You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            } else if (rpsbot == 'paper' && req.query.text == 'scissors') {
                var sendbacktext = "YOU WIN! You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            } else if (rpsbot == 'scissors' && req.query.text == 'rock') {
                var sendbacktext = "YOU WIN! You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            } else if (rpsbot == req.query.text) {
                return res.send({"text": "TIE! You both rolled " + req.query.text + "!!!"})
            } else {
                var sendbacktext = "You gotta enter 'rock', 'paper', or 'scissors' duhh";
            }
            return res.send({"text": sendbacktext});
        }
        else {
            //var rpsbot = rps[getrps];
            var rpsbot = rockPaperScissorsBot();
            console.log(rpsbot);
            var sendbacktext = "You gotta enter 'rock', 'paper', or 'scissors' duhh";
            return res.send({"text": sendbacktext});
        }
        
        
    });
    app.get("/", function(req, res){
        //console.log("someone hit ye ole default");
        return res.send("Hello Meow!");
    });

}

var rps = [
    'rock',
    'paper',
	'scissors'
];

//var getrps = Math.floor(Math.random()*rps.length);
//console.log (getrps);

function rockPaperScissorsBot () {
    //rpsbot = rps[getrps];
    //var getrps = undefined
    //getrps = Math.floor(Math.random()*rps.length);
    //console.log (getrps);
    //return rps[getrps]
    //console.log(rps[Math.floor(Math.random()*rps.length)]);
    return rps[Math.floor(Math.random()*rps.length)];
}

module.exports = appRouter;