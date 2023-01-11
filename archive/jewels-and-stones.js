const numJewelsInStones = function(jewels, stones) {
  let jMem = {}
  jewels.split('').forEach(l => {
    jMem[l] = true
  })
  let ans = 0
  for (let i = 0; i < stones.length; i++) {
    if (jMem[stones[i]]) {
      ans++
    }
  }

  return ans
};
//"aA", stones = "aAAbbbb"


console.log(numJewelsInStones("aA", "aAAbbbb"))