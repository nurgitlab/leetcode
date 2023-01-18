const searchRange = function(nums, target) {
  let m1 = findEl(nums,target,true)
  let m2 = findEl(nums,target,false)

  if (m1 === -1 && m2 !== -1) {
    m1 = m2
  }

  if (m2 === -1 && m1!== -1) {
    m2 = m1
  }
  return [m2,m1]

}

function findEl (nums, target, isMax) {
  let start = 0
  let end = nums.length - 1


  while (start < end) {
    let mid = Math.floor((end + start) /2)
    if (isMax) {
      if (target >= nums[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    } else {
      if (target <= nums[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }

  if (isMax) {
    if (nums[start] === target) {
      return start
    } else if (nums[start - 1] === target) {
      return start - 1
    }
  } else {
    if (nums[end] === target) {
      return end
    } else {
      if (nums[end + 1] === target) {
        return end + 1
      }
    }
  }

  return -1
}