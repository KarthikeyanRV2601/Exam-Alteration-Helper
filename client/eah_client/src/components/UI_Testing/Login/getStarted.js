const {Builder,By,Key}=require("selenium-webdriver")
require("chromedriver");

async function getStarted (){
    let driver=await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    setTimeout(async() => {
        await driver.findElement(By.id('#getStartedbtn')).click()
        return driver
    }, 5000);

    

}

module.exports=getStarted
