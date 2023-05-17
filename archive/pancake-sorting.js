/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  //3 2 4 1 3
  //4 2 3 1 4
  //1 3 2 4 2
  //3 1 2 4 3
  let [ans, l] = [[], arr.length]
  while (isSorted (arr) === false) {
    let [_, id] = findMax(arr)

    arr = [...arr.slice(0, id + 1).reverse(), ...arr.slice(id + 1)].slice(1).reverse()
    ans.push(id + 1, l)
    l = arr.length
    console.log(arr, ans)
  }

  return ans
}

function findMax (arr) {
  let [max, id] = [-Infinity, -1]

  arr.forEach((el, i) => {
    if (el > max) {
      max = el
      id = i
    }
  })

  return [max, id]
}

function isSorted (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }

  return true
}