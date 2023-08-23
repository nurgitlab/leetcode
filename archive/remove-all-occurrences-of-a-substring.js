var removeOccurrences = function(s, part) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])

    while (stack.length >= part.length && stack.slice(-part.length).join('') === part) {
      stack = stack.slice(0, stack.length - part.length)
    }
  }

  return stack.join('')
}