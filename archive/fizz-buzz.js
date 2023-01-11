var fizzBuzz = function (n) {
  let ans = []
  for (let i = 0; i < n; i++) {
    ans.push(`${i + 1}`)

    if (ans[i] % 3 === 0) {
      if (ans[i] % 5 === 0) {
        ans[i] = "FizzBuzz"
      } else {
        ans[i] = "Fizz"
      }
    } else if (ans[i] % 5 === 0) {
      ans[i] = "Buzz"
    }
  }

  return ans
};

console.log(fizzBuzz(3))