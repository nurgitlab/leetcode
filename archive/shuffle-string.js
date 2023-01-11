const restoreString = function(s, indices) {
  let mem = []
  for (let i = 0; i < s.length; i++) {
    mem[indices[i]] = s[i]
  }
  return mem.join('')
}

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))