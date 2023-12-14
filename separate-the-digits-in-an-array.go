func separateDigits(nums []int) []int {
	ans := []int{}

	for i := 0; i < len(nums); i++ {
		str := strconv.Itoa(nums[i])
		for j := 0; j < len(str); j++ {
			val, _ := strconv.Atoi(string(str[j]))

			ans = append(ans, val)
		}
	}

	return ans
}
