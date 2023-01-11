const thousandSeparator = function(n) {
  n = String(n).split('')
  let ans = ''
  let  k = 0
  for (let i = n.length - 1; i>=0; i--) {
    if (k===3) {
      ans+='.'
      k = 0
    }
    ans+=n[i]
    k++
  }

  return ans.split('').reverse().join('')
}

console.log(thousandSeparator(1345633))