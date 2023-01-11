const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const str = fs.readFileSync("input.txt", "utf8");
let arr = str.split(' ')
let sum = Number(arr[0]) + Number(arr[1])
fs.writeFileSync("output.txt", `${sum}`)
