const shiftGrid = function(grid, k) {
  let mem = []
  k%=grid.length * grid[0].length
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      mem.push(grid[i][j])
    }
  }
  let mem1 = mem.slice(0, k)
  let mem2 = mem.slice(k, mem.length - k)
  let mem3 = mem.slice(mem.length - k)
  mem = [...mem3, ...mem1, ...mem2]
  let ans = []
  let z = 0
  for (let i = 0; i < grid.length; i++) {
    ans.push([])
    for (let j = 0; j < grid[i].length; j++) {
      ans[i][j] = mem[z]
      z++
    }
  }

  return ans
};

console.log(shiftGrid([[1]], 1))