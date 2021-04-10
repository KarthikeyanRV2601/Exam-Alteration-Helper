require("chromedriver");
const signin= require('../Login/signin');
async function openTimetable(){
    let driver=await signin();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#timetableBtn').click();");
    }, 5000);

    return driver
}
module.exports=openTimetable;