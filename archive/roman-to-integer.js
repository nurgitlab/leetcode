var romanToInt = function (s) {
    let ans = 0
    if (s.includes('IV')) {
      s = s.replace('IV', '')
      ans += 4
    }
    if (s.includes('IX')) {
      s = s.replace('IX', '')
      ans += 9
    }
    if (s.includes('XL')) {
      s = s.replace('XL', '')
      ans += 40
    }
    if (s.includes('XC')) {
      s = s.replace('XC', '')
      ans += 90
    }
    if (s.includes('CD')) {
      s = s.replace('CD', '')
      ans += 400
    }
    if (s.includes('CM')) {
      s = s.replace('CM', '')
      ans += 900
    }

    while (s.length > 0) {
      if (s.includes('I')) {
        s = s.replace('I', '')
        ans += 1
      }
      if (s.includes('V')) {
        s = s.replace('V', '')
        ans += 5
      }
      if (s.includes('X')) {
        s = s.replace('X', '')
        ans += 10
      }
      if (s.includes('L')) {
        s = s.replace('L', '')
        ans += 50
      }
      if (s.includes('C')) {
        s = s.replace('C', '')
        ans += 100
      }
      if (s.includes('D')) {
        s = s.replace('D', '')
        ans += 500
      }
      if (s.includes('M')) {
        s = s.replace('M', '')
        ans += 1000
      }
    }

    return ans
  }
;

console.log(romanToInt('MCMXCIV'))