const mergeKLists = function(lists) {
  let mem = {}
  let r
  function goToNext (node, i) {
    if (mem[i] === undefined) {mem[i] = []}
    if (node !== null) {
      mem[i].push(node.val)
    }
    if (node !== null) {
      if (node.next !== null) {
        goToNext(node.next, i)
      } else {
        r = node
      }
    }
  }

  for (let i = 0; i < lists.length; i++) {
    goToNext(lists[i], i)
  }

  let arrs = []

  Object.keys(mem).forEach(k => {
    arrs.push(mem[k])
  })

  let totalArr = merge(arrs)
  console.log(totalArr)
  totalArr = totalArr.reverse()

  for (let i = 0; i < totalArr.length; i++) {
    if (i === 0) {
      r.val = totalArr[i]
    } else {
      r = {
        val: totalArr[i],
        next: r
      }
    }
  }

  return r === undefined ? null : r
};

function merge (lists) {
  let arrs = []
  let memk = []

  let n = 0

  for (let i= 0; i < lists.length; i++) {
    n+=lists[i].length
    arrs.push(lists)
    memk.push(0)
  }

  let ans = []
  for (let i = 0; i < n; i++) {
    let min = Infinity
    let minInd = -1

    for (let j = 0; j < lists.length; j++) {
      if (lists[j][memk[j]]!== undefined) {
        if (lists[j][memk[j]] < min) {
          min = lists[j][memk[j]]
          minInd = j
        }
      }
    }

    ans.push(min)
    memk[minInd]++
  }

  return ans
}