const addBinary = function (a, b) {
  let str1 = a.toString(2)
  let str2 = b.toString(2)

  if (str1.length < str2.length) {
    let mem = str1
    str1 = str2
    str2 = mem
  }

  let z = ''
  for (let i = str2.length; i < str1.length; i++) {
    z += '0'
  }
  str2 = z + str2

  let ans = ''
  let reg = 0
  for (let i = str2.length - 1; i >= 0; i--) {
    let s = Number(str2[i]) + Number(str1[i]) + reg
    if (s === 1 || s === 0) {
      ans+=s
      reg = 0
    } else {
      ans+= s % 2
      reg = 1
    }
  }

  if (reg === 1) {ans+=reg}
  return ans.split('').reverse().join('')
};