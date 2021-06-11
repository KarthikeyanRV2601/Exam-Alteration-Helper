const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const openDutiesPage= require('./ViewAFacultyDuty.exec,js');

async function ViewAFacultyDuty(){
    let driver=await ViewAFacultyDuty();

    setTimeout(async() => {
        await driver.executeScript("document.querySelector('.SearchResult').childNodes[0].click();");
    }, 5000);

    return driver
}

module.exports=ViewAFacultyDuty;