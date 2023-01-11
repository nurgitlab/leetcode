const findDuplicate = function(paths) {
  const store = {}

  paths.forEach(el => {
    let arr = el.split(' ')
    let [route] = arr
    for (let i = 1; i < arr.length; i++) {
      let a = arr[i].split('(')

      let content = a[1]
      let name = a[0]

      if (store[content] === undefined) {
        store[content] = []
      }

      store[content].push(`${route}/${name}`)
    }
  })

  let ans = []

  Object.keys(store).forEach(k => {
    if (store[k].length > 1) {
      ans.push(store[k])
    }
  })

  return ans
}

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]))