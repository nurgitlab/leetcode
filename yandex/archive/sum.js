const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = [];

rl.on('line', line => {
  arr.push(line);
  if (arr.length === 1) {

    let localArr = arr[0].split(' ');
    console.log(Number(localArr[0]) + Number(localArr[1]));


    rl.close();
  }
})