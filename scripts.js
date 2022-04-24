// const {execSync} = require('child_process')
// execSync("npm run build")
// execSync("npm run start")

var shell = require("shelljs");

shell.exec("npm run build");
shell.exec("node index.js");