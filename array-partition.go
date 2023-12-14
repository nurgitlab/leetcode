func arrayPairSum(nums []int) int {
	sort.SliceStable(nums, func(i, j int) bool {
		return nums[i] > nums[j]
	})

	ans := 0

	for i := 0; i < len(nums); i += 2 {
		if nums[i] < nums[i+1] {
			ans += nums[i]
		} else {
			ans += nums[i+1]
		}
	}
	return ans
}
