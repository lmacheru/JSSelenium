var func = require('../Core')
var url ="http://localhost:8080";
var Core;

var TestName="Selelogin";

    Core = new func();
    //Navigating to the url
            Core.Gotourl(url);
            Core.find("name","username","")
            Core.Takescreenshot(TestName,"Loging");

            Core.send("name","username","pravin.gordhan");
            Core.send("name","password","pravin.gordhan");
            Core.click("className","btn btn-primary","Login");
            Core.Takescreenshot(TestName,"Dashboard");



      