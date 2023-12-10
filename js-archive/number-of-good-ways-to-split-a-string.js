const numSplits = function (s) {
  let ans = 0
  let mem1 = {}
  let c1 = 0

  let mem2 = {}
  const lus = new Set(s.split(''))
  let c2 = lus.size

  s.split('').forEach(el => {
    if (mem2[el] === undefined) {
      mem2[el] = 0
    }
    mem2[el]++
  })

  for (let i = 0; i < s.length; i++) {
    if (mem1[s[i]] === undefined) {
      mem1[s[i]] = true;
      c1++
    }
    mem2[s[i]]--
    if (mem2[s[i]] === 0) {
      delete mem2[s[i]];
      c2--
    }

    if (c1 === c2) {
      ans++
    }
  }

  return ans
}

console.log(numSplits("aacaba"))