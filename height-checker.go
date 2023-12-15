func heightChecker(heights []int) int {
    ans:=0

    nosorted:=append([]int{}, heights...)
    sort.SliceStable(heights, func (i int, j int)bool {
        return heights[i] < heights[j]
    })

    for i:=0; i < len(heights); i++ {
        if (heights[i] != nosorted[i]) {ans++}
    }
    return ans
}