
require("chromedriver");
const openTimetable= require('../Faculty_dashboard/openTimetable');

async function signoutCheck(){

    let driver=await openTimetable();
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#Signout').click();");
        
    }, 5000);
    
}
signoutCheck();
