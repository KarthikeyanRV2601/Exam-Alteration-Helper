
const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const openScheduleInvigilationsPage= require('./openScheduleInvigilationsPage.exec.js');

async function uploadTimetable(){
    let driver=await openScheduleInvigilationsPage();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#inputFile').click();");
    }, 5000);

    return driver
}

module.exports=uploadTimetable;