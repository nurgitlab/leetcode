func arithmeticTriplets(nums []int, diff int) int {
    ans:=0
    for i:=0; i < len(nums); i++ {
        for j:=i + 1; j < len(nums); j++ {
            for k:=j + 1; k < len(nums); k++ {
                if nums[i] + diff == nums[j] && nums[j] + diff == nums[k] {ans++}
            }
        }
    }

    return ans
}