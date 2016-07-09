var spigot = require("stream-spigot")

var appRouter = function(app){
    app.get("/status", function (req, res) {
        console.log("someone hit ye ole status");
        if(req.query.text){
            var rps = [
                'rock',
                'paper',
                'scissors'
            ];

            var getrps = Math.floor(Math.random()*rps.length);

            rpsbot = rps[getrps];

            return res.send({rpsbot})
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



module.exports = appRouter;

module.exports = function() {
  return rps[Math.floor(Math.random() * rps.length)]
}

module.exports.rps = rps

module.exports.rpsStream = function() {
  return spigot(rps)
}