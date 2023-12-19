func mergeSimilarItems(items1 [][]int, items2 [][]int) [][]int {
    mem:=map[int]int{}

    items := append(items1, items2...)

    for i:=0; i < len(items); i++ {
        if _, isHas := mem[items[i][0]]; isHas {
            mem[items[i][0]]+=items[i][1]
        } else {
            mem[items[i][0]] = items[i][1]
        }
    }

    ans:=[][]int{}

    for k,v := range mem {
        ans = append(ans, []int{k, v})
    }

    sort.SliceStable(ans, func (i int, j int) bool {
        return ans[i][0] < ans[j][0]
    })

    return ans
}