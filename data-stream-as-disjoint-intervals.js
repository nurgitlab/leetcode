const SummaryRanges = function() {
  this.arr = new Set()
}

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
  this.arr.add(value)
}

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  let a = [...this.arr].sort((a,b) => a - b)

  let ans = []
  for (let i = 0; i < a.length; i++) {
    let start = a[i]
    let end = a[i]
    while (a[i] + 1 === a[i + 1]) {
      end = a[i + 1]
      i++
    }

    ans.push([start,end])
  }


  return ans
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */