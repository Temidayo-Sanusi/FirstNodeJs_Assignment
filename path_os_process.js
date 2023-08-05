const path = require("path");
const process = require("process");
const os = require("os");

const cwd = path.resolve();
console.log(cwd);

const separator = path.sep;
console.log(separator);

const extName = path.extname("/Users/temidayosanusi/Projects/ASSIGNMENT1/path/index.js");
console.log(extName);


const pwd = process.cwd();
console.log(pwd);

console.log("Process ID:", process.pid);

const userInfo = os.userInfo();
console.log(userInfo);

const platform = os.platform();
console.log(platform);