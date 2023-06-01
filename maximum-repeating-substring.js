const maxRepeating = function(sequence, word) {
  let a = 0
  while (sequence.includes(word.repeat(a))) {
    a++
  }

  return Math.max(0, a - 1)
}