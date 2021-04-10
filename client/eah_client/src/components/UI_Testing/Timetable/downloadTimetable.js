require("chromedriver");
const openTimetable=require('../Faculty_dashboard/openTimetable');

async function downloadTimetable(){
    let driver=await openTimetable();  
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('.DownloadButton').click();");
    }, 5000);

    
}
downloadTimetable()
