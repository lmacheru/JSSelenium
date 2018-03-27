var core = require('../Core')
var url ="https://www.linkedin.com/uas/login";
var Core;

    Core = new core();
    //Navigating to the url
            Core.Gotourl(url);

            //Loging in
            Core.send("name","session_key","macherulehlohonolo@gmail.com");
            Core.send("name","session_password","hlogzabb1");
            Core.click("name","signin","");

            //clicking network tab
            Core.click("className","nav-icon-content","Network");

            //Inviting people
        //    while(1){
                Core.click("name","invite","");
           //     console.log("It works");
        //    }
