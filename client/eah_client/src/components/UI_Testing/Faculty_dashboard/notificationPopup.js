const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const signin= require('../Login/signin');


async function notificationPopup(){
    let driver=await signin();
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#Notif0').click();");
    }, 6000);
}
notificationPopup()