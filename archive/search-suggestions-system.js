const suggestedProducts = function(products, searchWord) {
  let ans = []
  let w = ''
  for (let i = 0; i < searchWord.length; i++) {
    w+=searchWord[i]

    let localArr = []

    products = products.filter(pr => {
      for (let j = 0; j < w.length; j++) {
        if (pr[j] === undefined) {return false}
        if (pr[j] !== w[j]) {return false}
      }

      return true
    })

    products = products.sort((a,b) => {
      return lex(a,b)
    })

    for (let j = 0; j < Math.min(3, products.length); j++) {
      localArr.push(products[j])
    }

    ans.push(localArr)
  }

  return ans
}

function lex (w1, w2) {
  w1 = w1.split('')
  w2 = w2.split('')
  for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
    if (w1[i].charCodeAt(0) === w2[i].charCodeAt(0)) {continue} else {
      return w1[i].charCodeAt(0) - w2[i].charCodeAt(0)
    }
  }

  if (w1.length > w2.length) {return 1}
  return -1
}

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"))