var readBinaryWatch = function(turnedOn) {
  let h = [1, 2, 4, 8], m = [1, 2, 4, 8, 16, 32], ans = []

  for (let i = 0; i <= turnedOn; i++) {
    let j = turnedOn - i

    let hours = [...new Set(rec([...h], i, []).map(el => el.reduce((s, t) => s + t, 0)))]
    let mins = [...new Set(rec([...m], j, []).map(el => el.reduce((s, t) => s + t, 0)))]
    hours = hours.filter(el => el <= 11).map(el => String(el))
    mins = mins.filter(el => el <= 59).map(el => String(el).length === 1 ? `0${el}` : String(el))
    if (hours.length === 0 || mins.length === 0) continue
    console.log(hours, mins)

    for (let y = 0; y < hours.length; y++) {
      for (let u = 0; u < mins.length; u++) ans.push(`${hours[y]}:${mins[u]}`)
    }
  }

  return ans
}

function rec(arr, n, visited) {
  if (visited.length === n) return [visited]
  if (arr.length === 0) return []
  let ans = []

  for (let i = 0; i < arr.length; i++) {
    ans.push(rec([...arr.slice(0, i), ...arr.slice(i + 1)], n, [...visited, arr[i]]))
  }

  return ans.flat(1)
}