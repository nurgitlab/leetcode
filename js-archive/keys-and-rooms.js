/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
  let rk = {}

  rooms.forEach((keys,i) => {
    rk[i] = keys || []
  })

  let visitedRooms = new Set()
  let canVisit = new Set()
  function rec(currentRoom) {
    if (!visitedRooms.has(currentRoom)) {
      visitedRooms.add(currentRoom)
      console.log('cc', currentRoom, rk[currentRoom])
      if (rk[currentRoom].length > 0) {
        canVisit.add(...rk[currentRoom])
      }
      console.log('ck', canVisit)
      canVisit.add(currentRoom)

      rk[currentRoom].forEach(room => {
        rec(room)
      })
    }
  }

  rec(0)

  console.log(canVisit)

  return canVisit.size === rooms.length
}