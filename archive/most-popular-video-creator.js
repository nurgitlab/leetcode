/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
  let [mem, maxViews] = [{}, -Infinity]

  creators.forEach(creator => mem[creator] = {
    sum: 0,
    max: -Infinity,
    mostPopular: null
  })

  ids.forEach((name, i) => {
    mem[creators[i]].sum+=views[i]
    maxViews = Math.max(mem[creators[i]].sum, maxViews)
    if (views[i] > mem[creators[i]].max) {
      mem[creators[i]].max = views[i]
      mem[creators[i]].mostPopular = name
    } else if (views[i] === mem[creators[i]].max) {
      if (lexi(mem[creators[i]].mostPopular, name) > 0) {
        mem[creators[i]].mostPopular = name
      }
    }
  })

  return Object.entries(mem).
  map(arr => [arr[0], arr[1].mostPopular]).
  filter(arr => maxViews === mem[arr[0]].sum)
};

function lexi(word1, word2) {
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    if (word1[i] !== word2[i]) {
      return word1[i].charCodeAt(0) - word2[i].charCodeAt(0)
    }
  }

  return word1.length - word2.length
}