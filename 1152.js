var fs = require("fs");
var sentense = fs.readFileSync("input.txt").toString().trim().split(" ");

console.log(sentense.length);