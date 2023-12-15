func targetIndices(nums []int, target int) []int {
    sort.SliceStable(nums, func (i int, j int)bool {
        return nums[i] < nums[j]
    })

    ans:=[]int{}
    for i:=0; i < len(nums); i++ {
        if nums[i] == target {ans = append(ans, i)}
    }

    return ans
}