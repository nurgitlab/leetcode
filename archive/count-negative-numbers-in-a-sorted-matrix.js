var countNegatives = function(grid) {
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    let arr = grid[i]
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
      let mid = Math.floor((l+r)/2)
      if (arr[mid] >= 0) {
        l = mid + 1
      } else
      if (arr[mid] < 0) {
        r = mid - 1
      }
    }

    sum+= arr.length  - l
  }

  return sum
};

console.log(countNegatives([[3,2],[1,0]]))