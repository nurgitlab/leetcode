const maxScoreWords = function(words, letters, score) {
  let price = {}
  let mem = {}

  words.forEach(word => {
    word.split('').forEach(l => {
      mem[l] = 0
    })
  })


  letters.forEach(l => {
    price[l] = score[l.charCodeAt(0) - 97]

    if (mem[l] === undefined) {mem[l] = 0}
    mem[l]++
  })

  let max = 0
  function rec (currentMem, startId, sum) {
    max = Math.max(max, sum)
    for (let i = startId; i < words.length; i++) {
      if (canBuild({...currentMem}, words[i])) {
        let newMem = {...currentMem}
        words[i].split('').forEach(l => {
          newMem[l]--
        })

        rec({...newMem}, i + 1, sum + findSum(score, words[i]))
      }
    }
  }

  rec({...mem}, 0, 0)

  return max
}



function canBuild (mem, word) {
  word.split('').forEach(l => mem[l]--)

  let ans = true

  Object.keys(mem).forEach(k => {
    if (mem[k] < 0) {ans = false}
  })

  return ans
}

function findSum (arr, word) {
  let sum = 0
  word.split('').forEach(l => sum+=arr[l.charCodeAt(0) - 97])

  return sum
}

console.log(maxScoreWords(["add","dda","bb","ba","add"],
  ["a","a","a","a","b","b","b","b","c","c","c","c","c","d","d","d"],
  [3,9,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))