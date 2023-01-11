const largestWordCount = function (messages, senders) {
  let mem = {}
  let max = - Infinity
  for (let i = 0; i < messages.length; i++) {
    if (mem[senders[i]] === undefined) {
      mem[senders[i]] = messages[i].split(' ').length
    } else {
      mem[senders[i]] += messages[i].split(' ').length
    }

    if (mem[senders[i]] > max) {
      max = mem[senders[i]]
    }
  }
  let names = []
  Object.keys(mem).forEach(k => {
    if (mem[k] === max) {
      names.push(k)
    }
  })
  names.sort((a,b) => {
    if (a > b) {
      return 1
    } else {
      return -1
    }
  })

  if (names.length === 0) {
    return ''
  } else {
    return names[names.length - 1]
  }
};

console.log(largestWordCount(["How is leetcode for everyone","Leetcode is useful for practice"],  ["Bob","Charlie"]))