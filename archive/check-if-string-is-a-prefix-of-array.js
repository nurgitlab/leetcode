const isPrefixString = function(s, words) {
  let mem = ''
  for (let i = 0; i < words.length; i++) {
    mem+=words[i]

    if (mem.length < s.length) {continue} else{
      break
    }
  }
  if (mem!==s) {return false} else {
    return  true
  }
};