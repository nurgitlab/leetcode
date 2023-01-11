const gcdOfStrings = function(str1, str2) {
  if (str1.length < str2.length) {
    let mem = str1
    str1 = str2
    str2 = mem
  }

  let local = ''
  let ans = ''
  for (let i = 0; i < str2.length; i++) {
    local+=str2[i]
    if (
      str1.split(local).join('').length === 0
      &&
      str2.split(local).join('').length === 0
    ) {
      ans = local
    }
  }

  return ans
};

console.log(gcdOfStrings("ABABAB", "ABAB"))