const fairCandySwap = function (aliceSizes, bobSizes) {
  let sum1 = aliceSizes.reduce((sum, el) => sum + el, 0)
  let sum2 = bobSizes.reduce((sum, el) => sum + el, 0)

  aliceSizes = [...(new Set(aliceSizes))]
  bobSizes = [...(new Set(bobSizes))]


  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      let ns1 = sum1 - aliceSizes[i] + bobSizes[j]
      let ns2 = sum2 + aliceSizes[i] - bobSizes[j]
      if (ns1 === ns2) {
        return [aliceSizes[i], bobSizes[j]]
      }
    }
  }

  return aliceSizes
}

console.log(fairCandySwap([1, 1], [2, 2]))