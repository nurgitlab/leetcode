/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let mem = {} // course - needToFinish

  prerequisites.forEach(([course, needToFinish]) =>
    mem[course] === undefined ? mem[course] = [needToFinish] : mem[course].push(needToFinish)
  )
  let visited = {}
  function rec(node) {
    if (mem[node] === undefined) {
      visited[node] = true
      return true
    }
    if (visited[node] === true) return true
    if (visited[node] === false) return false
    visited[node] = false
    for (let i = 0; i < mem[node].length; i++) {
      if (rec(mem[node][i]) === false) return false
    }
    visited[node] = true
    return true
  }

  for (let i = 0; i < Object.keys(mem).length; i++) {
    if (rec(Object.keys(mem)[i]) === false) return false
  }

  return true
}