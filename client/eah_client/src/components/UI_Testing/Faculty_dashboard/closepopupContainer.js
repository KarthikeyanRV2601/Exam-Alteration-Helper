const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const notificationPopup= require('./notificationPopupExecute');


async function closepopupContainer(){
    let driver=await notificationPopup();
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('.closeButton').click();");
    }, 6000);
}
closepopupContainer();