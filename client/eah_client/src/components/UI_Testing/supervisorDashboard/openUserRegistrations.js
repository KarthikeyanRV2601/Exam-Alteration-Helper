const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const signin= require('../Login/signin');

async function openUserRegistrations(){
    let driver=await signin();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#UserRegistrations').click();");
    }, 5000);

    return driver
}

module.exports=openUserRegistrations;