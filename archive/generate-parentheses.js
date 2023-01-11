const generateParenthesis = (n) => {
  const ans = []

  const gen = (l, r, s) => {
    if (l > r) return

    if (l === 0 && r === 0) {
      ans.push(s)
      return;
    }

    if (l > 0) {
      gen(l - 1, r, s + '(')
    }
    if (r > 0) {
      gen(l, r - 1, s + ')')
    }

  }
  gen(n, n, '')
  return ans
}

console.log(generateParenthesis(4))