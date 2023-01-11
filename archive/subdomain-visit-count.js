const subdomainVisits = function (cpdomains) {
  let mem = {}
  cpdomains.forEach(domain => {
    domain = domain.split(' ')
    let count = Number(domain[0])
    let sub = domain[1].split('.')

    let s = ''
    for (let i = sub.length - 1; i >= 0; i--) {
      if (sub.length - 1 === i) {
        s = sub[i]
      } else {
        s = sub[i] + '.' + s
      }
      if (mem[s] === undefined) {
        mem[s] = count
      } else {
        mem[s]+=count
      }
    }
  })

  let ans = []

  Object.keys(mem).forEach(domain => {
    ans.push(`${mem[domain]} ${domain}`)
  })

  return ans
}

console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))