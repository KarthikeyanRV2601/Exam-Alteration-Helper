const {Builder,By,Key}=require("selenium-webdriver")
require("chromedriver");

async function signin (){
    let driver=await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys("karthi@gmail.com",Key.RETURN);
    await driver.findElement(By.id("pwd")).sendKeys("karthi",Key.RETURN);
    await driver.executeScript("document.querySelector('.LoginButton').click()");
    console.log("Signin test success",logSymbols.success);
    return driver
}

module.exports=signin
