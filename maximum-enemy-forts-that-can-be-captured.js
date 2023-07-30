var captureForts = function(forts) {
  let ans = 0

  for (let i = 0; i < forts.length; i++) {
    if (forts[i] !== 1) continue
    let l = i, r = i

    while (forts[l - 1] === 0) l--
    while (forts[r + 1] === 0) r++

    if (forts[l - 1] === -1) ans = Math.max(ans, i - l)
    if (forts[r + 1] === -1) ans = Math.max(ans, r - i)
  }

  return ans
};