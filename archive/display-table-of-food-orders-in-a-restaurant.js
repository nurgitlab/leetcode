const displayTable = function (orders) {
  let tables = new Set()
  let dishes = new Set()

  let mem = {}
  orders.forEach(order => {
    tables.add(Number(order[1]))
    dishes.add(order[2])
    if (mem[order[1]] === undefined) {
      mem[order[1]] = {}
      mem[order[1]][order[2]] = 1
    } else {
      if (mem[order[1]][order[2]] === undefined) {
        mem[order[1]][order[2]] = 1
      } else {
        mem[order[1]][order[2]]++
      }
    }
  })

  tables = [...tables].sort((a, b) => a - b)
  dishes = [...dishes].sort((a,b) => sortTwoWords(a,b))

  let ans = [['Table', ...dishes]]

  for (let i = 0; i < tables.length; i++) {
    let str = [`${tables[i]}`]
    for (let j = 0; j < dishes.length; j++) {
      if (mem[tables[i]][dishes[j]] === undefined) {
        str.push('0')
      } else {
        str.push(`${mem[tables[i]][dishes[j]]}`)
      }
    }
    ans.push(str)
  }

  return ans
}

function sortTwoWords (word1, word2) {
  word1 = word1.split('')
  word2 = word2.split('')
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    if (word1[i] === word2[i]) {
      continue
    } else {
      return word1[i].charCodeAt(0) - word2[i].charCodeAt(0)
    }
  }

  return word1.length - word2.length
}

console.log(sortTwoWords( 'roVR', 'rkC'))

console.log(displayTable([["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]]))