const maxLengthBetweenEqualCharacters = function(s) {
  let mem = {}
  s.split('').forEach((l, i) => {
    if (mem[l]===undefined) {
      mem[l] = [i]
    } else {
      mem[l] = [...mem[l], i]
    }
  })
  let ans = -1

  Object.keys(mem).forEach(k => {
    if (mem[k].length > 1) {
      let localDist = mem[k][mem[k].length - 1] - mem[k][0] - 1
      if (localDist > ans) {ans = localDist}
    }
  })
  return ans
};

console.log(maxLengthBetweenEqualCharacters("cbzxy"))