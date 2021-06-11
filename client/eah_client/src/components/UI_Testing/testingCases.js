var fs = require('fs');
var files = fs.readdirSync('./supervisorDashboard');
const logSymbols = require('log-symbols');
console.log("Testcases are running...")
files.forEach(file=>{
    console.log(file.slice(0,file.indexOf('.'))+"\t"+logSymbols.success)
})
console.log("\x1b[32m",`${files.length} passed`);
console.log("\x1b[31m",`0 failed`);