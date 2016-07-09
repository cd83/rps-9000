var appRouter = function(app){
    app.get("/status", function (req, res) {
        console.log("someone hit ye ole status");
        if(req.query.text){
            var rpsbot = rps[getrps];
            return res.send({"text": rpsbot})
            // if (rpsbot == 'rock' && req.query.text == 'scissors') {
            //     return res.send({"text": "YOU LOSE! Bot rolled ROCK!"});
            // } else if (rpsbot == 'paper' && req.query.text == 'rock') {
            //     return res.send({"text": "YOU LOSE! Bot rolled PAPER!"});
            // } else if (rpsbot == 'scissors' && req.query.text == 'paper') {
            //     return res.send({"text": "YOU LOSE! Bot rolled SCISSORS!"});
            // } else if (rpsbot == 'rock' && req.query.text == 'paper') {
            //     return res.send({"text": "YOU WIN! Bot rolled ROCK!"});
            // } else if (rpsbot == 'paper' && req.query.text == 'scissors') {
            //     return res.send({"text": "YOU WIN! Bot rolled PAPER!"});
            // } else if (rpsbot == 'scissors' && req.query.text == 'rock') {
            //     return res.send({"text": "YOU WIN! Bot rolled SCISSORS!"});
            // } else if (rpsbot == req.query.text) {
            //     return res.send({"text": "TIE! You both rolled " + req.query.text + "!!!"})
            // }
        }
        else {
            var rpsbot = rps[getrps];
            return res.send({"text": rpsbot})
            // return res.send({"text": "You gotta do 'rock', 'paper', or 'scissors', duhh."});
        }
        
        
    });
    app.get("/", function(req, res){
        console.log("someone hit ye ole default");
        return res.send("Hello Meow!");
    });

}

var rps = [
    'rock',
    'paper',
	'scissors'
];

var getrps = Math.floor(Math.random()*rps.length);

function rockPaperScissorsBot () {
    rpsbot = rps[getrps];
}

module.exports = appRouter;