const rankTeams = function(votes) {
  let players = {}

  let a = {}

  for (let i = 0; i < votes[0].length; i++) {
    a[i] = 0
  }

  votes[0].split('').forEach(el => {
    players[el] = {...a}
  })

  votes.forEach(vote => {
    vote.split('').forEach((el, i) => {
      players[el][i]++
    })
  })

  let pl = []

  Object.keys(players).forEach(k => {
    let t = []
    Object.keys(players[k]).forEach(kk => t.push([Number(kk), players[k][kk]]))
    t = t.sort((a,b) => a[0] - b[0]).map(el => el[1])
    pl.push([k, t])
  })

  pl = pl.sort((a,b) => sortBy(a, b))
  console.log(pl)

  pl = pl.map(el => el[0]).join('')

  return pl
}

function sortBy (ar1, ar2) {
  for (let i = 0; i < ar1[1].length; i++) {
    if (ar1[1][i]!==ar2[1][i]) {
      return ar2[1][i] - ar1[1][i]
    }
  }

  return - ar2[0].charCodeAt(0) + ar1[0].charCodeAt(0)
}