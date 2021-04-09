const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const signin= require('../Login/signin');

async function openProfliesettings(){
    let driver=await signin();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#Profilesettings').click();");
    }, 5000);

    
}
openProfliesettings()