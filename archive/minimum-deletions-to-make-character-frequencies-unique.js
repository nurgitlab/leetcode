const minDeletions = function(s) {
  let mem = {}

  for (let i = 0; i < s.length; i++) {
    if (mem[s[i]] === undefined) {mem[s[i]] = 0}
    mem[s[i]]++
  }
  let arr = []

  Object.keys(mem).forEach(k => {
    arr.push(mem[k])
  })

  arr.sort((a,b) => b - a)
  console.log(arr)
  if (arr.length === 1) {return 0}
  let ans = 0
  for (let i = 1; i < s.length; i++) {
    if (arr[i] >= arr[i-1]) {
      let r =arr[i] - arr[i - 1] + 1
      ans+=r
      arr[i]-=r
      if (arr[i] === 0) {
        for (let j = i + 1; j < arr.length; j++) {
          ans+=Math.max(arr[j], 1)
        }
        break
      }
    }
  }
  console.log(arr)
  return ans
}

console.log(minDeletions( "beaddedbacdcd"))