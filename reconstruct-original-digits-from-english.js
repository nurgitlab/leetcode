/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  let mem = {}
  String('zeroonetwothreefourfivesixseveneightnine').split('').forEach(el => mem[el] = 0)
  s.split('').forEach(el => mem[el]++)

  let ans = Array(10).fill(0)

  ans[0] = mem['z']
  mem['z']-=ans[0]
  mem['e']-=ans[0]
  mem['r']-=ans[0]
  mem['o']-=ans[0]
  ans[2] = mem['w']
  mem['t']-=ans[2]
  mem['w']-=ans[2]
  mem['o']-=ans[2]
  ans[4] = mem['u']
  mem['f']-=ans[4]
  mem['o']-=ans[4]
  mem['u']-=ans[4]
  mem['r']-=ans[4]
  ans[6] = mem['x']
  mem['s']-=ans[6]
  mem['i']-=ans[6]
  mem['x']-=ans[6]
  ans[1] = mem['o']
  mem['o']-=ans[1]
  mem['n']-=ans[1]
  mem['e']-=ans[1]
  ans[3] = mem['r']
  mem['t']-=ans[3]
  mem['h']-=ans[3]
  mem['r']-=ans[3]
  mem['e']-=ans[3]*2
  ans[5] = mem['f']
  mem['f']-=ans[5]
  mem['i']-=ans[5]
  mem['v']-=ans[5]
  mem['e']-=ans[5]
  ans[8] = mem['g']
  mem['e']-=ans[8]
  mem['i']-=ans[8]
  mem['g']-=ans[8]
  mem['h']-=ans[8]
  mem['t']-=ans[8]
  ans[7] = mem['s']
  mem['s']-=ans[7]
  mem['e']-=ans[7]*2
  mem['v']-=ans[7]
  mem['n']-=ans[7]
  ans[9] = mem['i']
  mem['n']-=ans[9]*2
  mem['i']-=ans[9]
  mem['e']-=ans[9]


  let u = ''

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === 0) continue

    u+=Array(ans[i]).fill(i).join('')
  }

  return u
};

//9 nine