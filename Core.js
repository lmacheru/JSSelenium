//requiring Packages to start a Test
var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
chrome = require('selenium-webdriver/chrome'),
obj = new chrome.Options();
var fs = require('fs');
var path ="../Screenshots";

var core = function() {
//Creating the driver and specifying the capabilities 
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(obj).build();
    var driver = this.driver;

    this.Gotourl = function (url){
        //Moves old existing screen to backup folder
        //this.createfolder('Wahhh2');
        return driver.get(url)
    }

    this.quit = function(){
        return driver.quit();
    }

    //Find elements
    this.find = function(type,element,txt) {
       
    if(type == 'className'){
        driver.wait(until.elementLocated(By.className(element)), 5000);
        return driver.findElement(By.className(element,txt))
    }else
    
    if(type == 'Xpath'){
        driver.wait(until.elementLocated(By.type(element)), 5000);
        return driver.findElement(By.type(element))
    }else
    if(type == 'name'){
        driver.wait(until.elementLocated(By.name(element)), 5000);
        return driver.findElement(By.name(element))
    }else
    if(type == 'id'){
        driver.wait(until.elementLocated(By.id(element)), 10000);
        return driver.findElement(By.id(element))
    }
    else
    if(type == 'css'){
        driver.wait(until.elementLocated(By.css(element)), 10000);
        return driver.findElement(By.css(element))
    }
    }
    //send text
    this.send = function(type,element,txt) {
        return this.find(type,element).sendKeys(txt);        
    }

    //click Button
    this.click = function(type,element,txt) {
        return this.find(type,element,txt).click();        
    }
    //taking screenshots
    this.Takescreenshot = function(ScriptsName,Step){
        this.createfolder(ScriptsName);      

            driver.takeScreenshot().then(function (base64Image) {
            var decodedImage = new Buffer(base64Image, 'base64');
            fs.writeFile('image.jpg', decodedImage, function(err) {});

            fs.rename("image.jpg",path+"/"+ScriptsName+"/"+Step+".jpg",function(err){
                if(err){
                    console.log(err);
                    console.log("Create folder and move");
                }
                else
                {
                    console.log("file moved");  
                }
            });
            console.log('took screenshot');
        
        });
    }
    this.createfolder =function(TestMethod){
        try{
            fs.mkdirSync(path);
            fs.mkdirSync(path+"/"+TestMethod)
            }catch(err){
                if(err.code == 'EEXIST'){
                    console.log('The directory exists');
                   
                }
                else
                {
                    console.log(err);
                }
            }      
    }
  
}
module.exports = core;