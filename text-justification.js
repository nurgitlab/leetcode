const fullJustify = function(words, maxWidth) {
  let w = []
  let wSum = 0

  let list = []
  for (let i = 0; i < words.length; i++) {
    if (wSum + words[i].length < maxWidth) {
      w.push(words[i])
      wSum+=words[i].length + 1
    } else if  (wSum + words[i].length === maxWidth){
      console.log(words[i], wSum)
      w.push(words[i])
      list.push([...w])
      w = []
      wSum = 0
    } else {
      list.push([...w])
      w = [words[i]]
      wSum = words[i].length + 1
    }
  }
  console.log(list)

  if (w.length > 0) {list.push(w)}
  list = list.map((arr, i) => {
    if (list.length - 1 === i) {
      return makeString('lastString', arr, maxWidth)
    }
    return makeString('', arr, maxWidth)
  }).filter(el => el.length > 0)
  console.log(list)

  return list
}

function makeString (rule, arr, width) {
  let ans = ''
  if (rule === 'lastString') {
    ans = arr.join(' ')
    while (ans.length < width) {
      ans+=' '
    }

    return ans
  }

  if (arr.length === 1) {
    ans = arr[0]
    while (ans.length < width) {
      ans+=' '
    }

    return ans
  }

  if (arr.length === 2) {
    let needLength = width - arr[0].length - arr[1].length

    let s = ''
    for (let i = 0; i < needLength; i++) {
      s+=' '
    }

    return arr[0] + s + arr[1]
  }

  let spacesLength = width
  arr.forEach(el => spacesLength-=el.length)

  let spaces = arr.length - 1

  if (spacesLength % spaces === 0) {
    let sl = ''
    for (let i = 0; i < spacesLength / spaces; i++) {
      sl+=' '
    }

    return arr.join(sl)
  } else {
    console.log('here', arr)
    let v = []

    let sl = ''
    for (let i = 0; i < (spacesLength / spaces) - 1; i++) {
      sl+=' '
    }

    for (let i = 0; i < spaces; i++) {
      v.push(sl)
    }
    for (let i = 0; i < spacesLength % spaces; i++) {
      v[i]+=' '
    }
    v.push('')
    let a = ''
    for (let i = 0; i < arr.length; i++) {
      a+=arr[i] + v[i]
    }

    return a
  }
}