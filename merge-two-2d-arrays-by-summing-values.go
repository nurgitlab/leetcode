func mergeArrays(nums1 [][]int, nums2 [][]int) [][]int {
    ans := [][]int{}

    i:=0; j:=0
    for i < len(nums1) && j < len(nums2) {
        if (nums1[i][0] == nums2[j][0]) {
            sum:=nums1[i][1] + nums2[j][1]
            ans = append(ans, []int{nums1[i][0], sum})
            i++
            j++
            continue
        }

        if (nums1[i][0] < nums2[j][0]) {
            ans = append(ans, nums1[i])
            i++
        } else {
            ans = append(ans, nums2[j])
            j++
        }
    }
    ans = append(ans, nums1[i:]...)
    ans = append(ans, nums2[j:]...)

    return ans
}