const countStudents = function (students, sandwiches) {
  let prev = students
  while (prev.length === students.length && sandwiches.length > 0 && students.length > 0) {
    students = students.map(st => {
      if (st === sandwiches[0]) {
        sandwiches.splice(0, 1)
        return -1
      } else return st
    })
    students = students.filter(el => el > -1)
    if (prev.length === students.length) {break} else {prev = JSON.parse(JSON.stringify(students))}
  }

  return students.length
}

console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]))