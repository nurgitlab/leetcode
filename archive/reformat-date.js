const reformatDate = function (date) {
  date = date.split(' ').reverse()
  const mem = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
  }
  date[1] = mem[date[1]]
  date[2] = date[2].replace(/[a-zA-Zа-яА-Я]/g, '')
  date[1] = addNull(date[1])
  date[2] = addNull(date[2])
  return date.join('-')
}

function addNull(str) {
  if (typeof str !== 'string') {
    str += ''
  }
  if (str.length < 2) {
    str = '0' + str
  }

  return str
}

console.log(reformatDate("6th Jun 1933"))