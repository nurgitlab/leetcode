const duplicateZeros = function(arr) {
  let m = [...arr]
  for (let i = 0; i < m.length; i++) {
    if (m[i]===0) {
      m = [...m.slice(0,i), 0, ...m.slice(i)]
      i+=1
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = m[i]
  }
};