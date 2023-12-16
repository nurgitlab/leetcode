func findMaxConsecutiveOnes(nums []int) int {
    c:= 0; max:=0

    for i:=0; i < len(nums); i++ {
        if nums[i] == 0 {c = 0}
        if nums[i] == 1 {c++}

        if (c > max) {max = c}
    }

    return max
}