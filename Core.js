
//requiring Packages to start a Test
var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
chrome = require('selenium-webdriver/chrome'),
obj = new chrome.Options();


 var core = function() {
//Creating the driver and specifying the capabilities 
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(obj).build();
    var driver = this.driver;

    this.Gotourl = function (url){
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
        driver.wait(until.elementLocated(By.xpath(element)), 5000);
        return driver.findElement(By.xpath(element))
    }else
    if(type == 'name'){
        driver.wait(until.elementLocated(By.name(element)), 5000);
        return driver.findElement(By.name(element))
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
  
}
module.exports = core;