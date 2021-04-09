const {Builder,By,Key,util,JavascriptExecutor}=require("selenium-webdriver")
require("chromedriver");
const signin= require('../Login/signin');
async function openTimetable(){
    let driver=await signin();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#timetableBtn').click();");
    }, 5000);

    
}
openTimetable()