func sortByBits(arr []int) []int {
	sort.SliceStable(arr, func(i, j int) bool {
		if one(arr[i]) == one(arr[j]) {
			return arr[i] < arr[j]
		}

		return one(arr[i]) < one(arr[j])
	})
	return arr
}

func one(num int) int {
	ans := 0

	for num > 0 {
		if num%2 == 0 {
			num /= 2
		} else {
			num = (num - 1) / 2
			ans++
		}
	}

	return ans
}
