const licenseKeyFormatting = function(s, k) {
  let sk = s.split('-').join('')

  let ans = []

  let st = 0

  if (sk.length % k !== 0) {
    st = sk.length % k

    let h = ''

    for (let i = 0; i < st; i++) {
      h+=sk[i]
    }

    ans.push(h)
  }


  for (let i = st; i < sk.length; i+=k) {
    let m = ''
    for (let j = i; j < i + k; j++) {
      m+=sk[j]
    }

    ans.push(m)
  }

  return ans.join('-').toUpperCase()
}