const countMatches = function(items, ruleKey, ruleValue) {
  let ind
  if (ruleKey === 'type') {
    ind = 0
  } else
  if (ruleKey === 'color') {
    ind = 1
  } else {
    ind = 2
  }
  let ans = 0
  items.forEach(str => {
    if (ruleValue === str[ind]) {
      ans++
    }
  })

  return ans
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],  "color", "silver"))