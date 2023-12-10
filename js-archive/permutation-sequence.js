let maxFac = 3
const fac = {
  1: 1,
  2: 2,
  3: 6
}

const getPermutation = function(n, k) {
  let arr = []
  for (let i = 1; i<= n; i++) {
    arr.push(i)
  }
  let ans = []

  function rec(arr, k) {
    if (arr.length === 1) {
      console.log(arr)
      ans.push(arr[0])
    } else {
      let fl = findFac(arr.length - 1)
      let sum = 0
      console.log(arr, fl)
      for (let i = 0; i < arr.length; i++) {
        sum+=fl

        if (sum >= k) {
          ans.push(arr[i])
          rec([...arr.slice(0, i), ...arr.slice(i + 1)], k - sum + fl)
          break
        }
      }
    }
  }

  rec(arr, k)

  console.log(ans)

  return ans.join('')
}

function findFac (n) {
  if (fac[n] === undefined) {
    if (fac[n - 1] === undefined) {
      for (let i = maxFac + 1; i<=n; i++) {
        fac[i] = i*fac[i-1]
      }
      maxFac = n
    } else {
      fac[n] = n * fac[n-1]
      maxFac = n
    }
  }

  return fac[n]
}