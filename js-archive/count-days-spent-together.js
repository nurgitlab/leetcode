/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


const countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  let [a1,a2,b1,b2] = [arriveAlice, leaveAlice, arriveBob, leaveBob].map(date => {
    let [m, d] = date.split('-').map(el => Number(el))

    return dfs(m,d)
  })
  console.log(a1,a2, b1, b2)

  return  Math.max(Math.min(a2,b2) - Math.max(a1,b1) + 1, 0)
};

function dfs (m, d) {
  let ans = 0
  for (let i = 0; i < m - 1; i++) {
    ans+=daysInMonth[i]
  }

  return ans + d
}