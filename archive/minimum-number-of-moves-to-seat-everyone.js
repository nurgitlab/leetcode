const minMovesToSeat = function (seats, students) {
  seats = seats.sort((a, b) => a - b)
  students = students.sort((a, b) => a - b)
  let sum = 0
  seats.forEach((_, i) => {
    sum+=Math.abs(seats[i] - students[i])
  })

  return sum
}

console.log(minMovesToSeat( [4,1,5,9], [1,3,2,6]))