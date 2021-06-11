
const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const openUserRegistrations= require('./openUserRegistrations.exec.js');

async function rejectUserRegistration(){
    let driver=await openUserRegistrations();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('.SearchResult').childNodes[0].querySelector('.Deny').click();");
    }, 5000);

    return driver
}

module.exports=rejectUserRegistration;