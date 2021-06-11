const {Builder,By,Key}=require("selenium-webdriver")
require("chromedriver");

async function register (){
    let driver=await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/register-user");
    await driver.findElement(By.id("username")).sendKeys("ramanish",Key.RETURN);
    await driver.findElement(By.id("email")).sendKeys("ramanish@gmail.com",Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys("ramanish",Key.RETURN);
    await driver.findElement(By.id("re-enter-password")).sendKeys("ramanish",Key.RETURN);
    await driver.findElement(By.id("departments")).sendKeys("CSE",Key.RETURN);
    return driver
}

module.exports=register
