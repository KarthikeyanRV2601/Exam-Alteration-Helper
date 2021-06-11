const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const openTimetable= require('../Login/signin');

async function signOut(){

    let driver=await signin();
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#Signout').click();");
    }, 3000);
}
signOut();
