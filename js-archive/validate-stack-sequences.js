/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = []

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])

    while (stack.at(-1) === popped[0] && stack.length > 0) {
      stack.pop()
      popped.shift()
    }
  }

  console.log(stack, popped)

  return stack.length === 0
};