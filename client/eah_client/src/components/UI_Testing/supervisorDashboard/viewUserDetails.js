
const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const openUserRegistrations= require('./openUserRegistrations.exec.js');

async function viewUserDetails(){
    let driver=await openUserRegistrations();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('.SearchResult').childNodes[0].click();");
    }, 5000);

    return driver
}

module.exports=viewUserDetails;