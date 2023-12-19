func maxProductDifference(nums []int) int {
    sort.SliceStable(nums, func (i int, j int) bool {
        return nums[i] < nums[j]
    })

    return nums[len(nums) - 1] * nums[len(nums) - 2] - nums[0] * nums[1]
}