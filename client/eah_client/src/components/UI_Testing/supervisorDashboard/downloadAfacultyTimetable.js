const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const openDutiesPage= require('./ViewAFacultyDuty.exec.js');

async function downloadAfacultyTimetable(){
    let driver=await ViewAFacultyDuty();

    setTimeout(async() => {
        await driver.executeScript("document.querySelector('.DownloadButton').click();");
    }, 5000);

    return driver
}

downloadAfacultyTimetable();