var validIPAddress = function(queryIP) {
  queryIP = queryIP.toLowerCase()

  let p6 = queryIP.split('').reduce((s, el) => el === ':' ? s + 1 : s, 0)
  let p4 = queryIP.split('').reduce((s, el) => el === '.' ? s + 1 : s, 0)

  if (p4 === 3) {
    queryIP = queryIP.split('.')

    for (let i = 0; i < queryIP.length; i++) {
      if (
        queryIP[i].length === 0 ||
        (queryIP[i].length > 1 && queryIP[i][0] === '0') ||
        0 > Number(queryIP[i])
        || Number(queryIP[i]) > 255
      ) return "Neither"

      let set = new Set('0123456789'.split(''))

      let arr = queryIP[i].split('')
      for (let j = 0; j < arr.length; j++) if (!set.has(arr[j])) return "Neither"
    }

    return "IPv4"
  } else if (p6 === 7) {
    queryIP = queryIP.split(':')

    for (let i = 0; i < queryIP.length; i++) {
      if (queryIP[i].length < 1 || queryIP[i].length > 4) return "Neither"
      let set = new Set('abcdef1234567890'.split(''))

      let arr = queryIP[i].split('')

      for (let j = 0; j < arr.length; j++) if (!set.has(arr[j])) return "Neither"
    }

    return "IPv6"
  }

  return "Neither"
};