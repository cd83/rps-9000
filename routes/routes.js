var appRouter = function(app){
    app.get("/status", function (req, res) {
        console.log("someone hit ye ole status");
        if(req.query.text){
            return res.send({"text": "Boro says " + req.query.text});
        }
        else {
            return res.send({"text": "Boro says howdy!"});
        }
        
        
    });
    app.get("/", function(req, res){
        console.log("someone hit ye ole default");
        return res.send("Hello Meow!");
    });

}

module.exports = appRouter;