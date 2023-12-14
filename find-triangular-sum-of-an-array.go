func triangularSum(nums []int) int {
	for len(nums) > 1 {
		arr := []int{}

		for i := 0; i < len(nums)-1; i++ {
			arr = append(arr, (nums[i]+nums[i+1])%10)
		}
		nums = arr
	}

	return nums[0]
}
