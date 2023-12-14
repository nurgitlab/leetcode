func findDifference(nums1 []int, nums2 []int) [][]int {
	mem1 := map[int]bool{}
	mem2 := map[int]bool{}

	for _, v := range nums1 {
		mem1[v] = true
	}

	for _, v := range nums2 {
		mem2[v] = true
	}

	ans1 := []int{}
	ans2 := []int{}

	for k, _ := range mem1 {
		if !mem2[k] {
			ans1 = append(ans1, k)
		}
	}

	for k, _ := range mem2 {
		if !mem1[k] {
			ans2 = append(ans2, k)
		}
	}

	return [][]int{ans1, ans2}
}
