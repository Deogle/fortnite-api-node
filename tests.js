var FortniteAPI = require('./FortniteAPI');

var options = {
    api_key: "MUH API KEY",
    platform: "pc" //all other platforms are inferior
}

var fortnite = new FortniteAPI(options);

fortnite.getKills('Deogle')
.then(function(result){
    console.log("Deogle has " + result + " kills");
})

