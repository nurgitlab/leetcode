// function allCombinations(arr) {
//   const n = arr.length
//   const p = arr.map((_, i) => i)
//   let i = 1;
//
//   while (i < n) {
//     //i - Номер элемента, который подлежит замене
//     p[i]--
//     let j = (i % 2) * p[i]
//       [arr[i], arr[j]] = [arr[j], arr[i]]
//     let mem = arr[i]
//     arr[i] = arr[j]
//     arr[j] = mem
//
//     console.log(p, arr, arr[i], arr[j], i)
//     i = 1
//     while (p[i] === 0) {
//       p[i] = i
//       i += 1
//     }
//   }
//
//   return null
// }


function allCombinationsRecursion(arr, n) {
  if (n < 2) {
    console.log(arr)
  } else {
    let memArr = []
    for (let j = n - 1; j >= 0; j--) {
      let mem = arr[j]
      arr[j] = arr[n - 1]
      arr[n - 1] = mem
      allCombinationsRecursion(arr, n - 1)
      mem = arr[j]
      arr[j] = arr[n - 1]
      arr[n - 1] = mem
    }

    return memArr
  }
}

console.log(allCombinationsRecursion([1, 2, 3, 4], 4))