const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = [];

rl.on('line', line => {
  arr.push(line);
  if (arr.length === 2) {
    let j = arr[0].split('')
    let s = arr[1].split('')

    let sum = 0

    for (let i = 0; i < s.length; i++) {
      if (j.includes(s[i])) {
        sum++
      }
    }


    console.log(sum)
    rl.close();
  }
})