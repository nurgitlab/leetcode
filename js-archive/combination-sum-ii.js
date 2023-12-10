/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let ans = new Set()
  let visited = new Set()
  function rec (arr, cands, sum) {
    if (cands.length === 0) return;

    if (visited.has(cands.join('-'))) return;
    visited.add(cands.join('-'))
    for (let i = 0; i < cands.length; i++) {
      if (sum + cands[i] === target) {
        ans.add([...arr, cands[i]].sort((a,b) => a - b).join('-'))
      } else if (sum + cands[i] < target) {
        rec([...arr, cands[i]], [...cands.slice(0, i), ...cands.slice(i + 1)], sum + cands[i])
      }
    }
  }
  rec([], [...candidates], 0)

  return [...ans].map(el => el.split('-').map(l => Number(l)))
};