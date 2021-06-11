const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const notificationPopup= require('./notificationPopupExecute');


async function acceptrequestFromNotification(){
    let driver=await notificationPopup();
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#RequestAcceptButton').click();");
    }, 6000);
}
acceptrequestFromNotification();