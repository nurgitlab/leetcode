// Сбербанк тестовое задание

// ATM
// f1 -> принимать деньги (p1 (номинал), p2 (количество))
// f2 -> выдать деньги (сумма (кратная номинальному номиналу))
// От больших к меньшим

const mem = {}

// '1000': [100, 10]
// 1 - кол-во доступных
// 2 - кол-во ЗАБРОНИРОВАННЫХ купюр
const b = {}

function put(nominal, kol) {
  if (mem[nominal] === undefined) {
    mem[nominal] = kol
  } else {
    mem[nominal] += kol
  }

  if (b[nominal] === undefined) {
    b[nominal] = 0
  }
  return mem
}

function get(sum) {
  let arr = []

  Object.keys(mem).forEach(k => {
    arr.push(Number(k))
  })

  arr.sort((a, b) => a - b)
  let mem2 = {}
  for (let i = arr.length - 1; i >= 0; i--) {
    let dost = mem[arr[i]] - b[arr[i]]
    if (dost === 0) continue
    let howMatchWeCanGive = Math.min(dost, Math.floor(sum / arr[i])) // <--- Problem

    if (b[arr[i]] === undefined) {
      b[arr[i]] += howMatchWeCanGive
    }

    mem2[arr[i]] = howMatchWeCanGive

    let ostatok = sum - howMatchWeCanGive * arr[i]

    sum = ostatok

    if (ostatok === 0) break
  }

  Object.keys(mem2).forEach((k) => {
    b[k] -= mem2[k]
  })

  if (sum !== 0) {
    return {}
  } else {
    Object.keys(mem2).forEach((k) => {
      mem[k] -= mem2[k]
    })
    return mem2
  }
  console.log('Остаток', sum)
}

put(100, 50)
put(1000, 10)
console.log(get(11000))
// console.log(put(100, 6))