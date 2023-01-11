function sum(n) {
  let sum = n

  function s(m) {
    sum += m
    console.log(sum)
    return s
  }

  return s
}

console.log(sum(1)(2)(3)(4)(5)(6))