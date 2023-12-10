var permute = function (nums) {
  let ans = []
  let allPers = function (arr, n) {
    if (n < 2) {
      let a = arr.slice()
      ans.push(a)
    } else {
      for (let i = n - 1; i >= 0; i--) {
        let mem = arr[i]
        arr[i] = arr[n - 1]
        arr[n - 1] = mem
        allPers(arr, n - 1)
        mem = arr[i]
        arr[i] = arr[n - 1]
        arr[n - 1] = mem
      }
    }
  }

  allPers(nums, nums.length)

  return ans
};


console.log(permute([]))