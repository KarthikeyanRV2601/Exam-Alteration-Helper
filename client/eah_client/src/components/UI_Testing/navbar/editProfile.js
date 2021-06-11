require("chromedriver");
const openTimetable=require('../Faculty_dashboard/openTimetable');

async function editProfile(){
    let driver=await openTimetable(); 
    setTimeout(async() => {
        await driver.executeScript("document.querySelector('#Profilesettings').click();");
    }, 5000);

    return driver
}

module.exports=editProfile;