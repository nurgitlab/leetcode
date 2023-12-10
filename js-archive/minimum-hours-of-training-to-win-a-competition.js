const minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  let ans = 0
  for (let i = 0; i < energy.length; i++) {
    if (initialEnergy <= energy[i]) {
      ans += energy[i] - initialEnergy + 1
      initialEnergy = 1
    } else {
      initialEnergy -= energy[i]
    }

    if (initialExperience <= experience[i]) {
      ans += experience[i] - initialExperience + 1
      initialExperience = experience[i] * 2 + 1
    } else {
      initialExperience += experience[i]
    }
  }

  return ans
}

console.log(minNumberOfHours(
  5, 3,
  [1, 4, 3, 2], [2, 6, 3, 1]
))