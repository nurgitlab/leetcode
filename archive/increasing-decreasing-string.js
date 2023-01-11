const sortString = function (s) {
  let mem = {}

  for (let i = 0; i < s.length; i++) {
    if (mem[s[i]] === undefined) {
      mem[s[i]] = 1
    } else {
      mem[s[i]]++
    }
  }

  let arr = []

  Object.keys(mem).forEach(k => {
    arr.push([k, mem[k]])
  })

  arr.sort((a,b) => a[0].charCodeAt(0) -  b[0].charCodeAt(0))

  let ans = ''

  while (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr)
      ans+=arr[i][0]
      arr[i][1]--

      if (arr[i][1] === 0) {
        arr.splice(i, 1)
        i--
      }
    }
    console.log(arr)

    for (let i = arr.length - 1; i >=0; i--) {
      ans+=arr[i][0]
      arr[i][1]--

      if (arr[i][1] === 0) {
        arr.splice(i, 1)
      }
    }
  }
  return ans
};

console.log(sortString("rat"))