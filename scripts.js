var shell = require("shelljs");

shell.exec("webpack build");
shell.exec("node index.js");