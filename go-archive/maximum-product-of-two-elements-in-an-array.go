func maxProduct(nums []int) int {
    sort.SliceStable(nums, func(i, j int) bool {
        return nums[i] > nums[j]
    })
    return (nums[0] - 1) * (nums[1] - 1)
}