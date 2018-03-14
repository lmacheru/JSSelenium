
var core = require('./Core')
var url ="http://localhost:8080";

var Core;
    //calling the Startup functions from Core

    Core = new core();
    //Navigating to the url
    Core.Gotourl(url);

    //Logining into the App
    Core.send("name","username","pravin.gordhan");
    Core.send("name","password","pravin.gordhan");
    Core.click("className","btn btn-primary","Login");

//Core.quit();