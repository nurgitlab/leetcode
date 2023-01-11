const checkArithmeticSubarrays = function(nums, l, r) {
  let ans = []
  for (let i = 0; i < l.length; i++) {
    let a = []

    for (let j = l[i]; j <=r[i]; j++) {
      a.push(nums[j])
    }

    a = a.sort((z,x) => z - x)

    if (isGood(a)) {ans.push(true)} else {ans.push(false)}
  }

  return ans
}

function isGood (arr) {
  if (arr.length < 2) {return false}
  if (arr.length === 2) {return true}

  let r

  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      r = arr[i + 1] - arr[i]
    } else {
      if (arr[i + 1] - arr[i] === r) {continue} else {return false}
    }
  }

  return true
}

console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]))