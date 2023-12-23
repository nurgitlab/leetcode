func lastVisitedIntegers(words []string) []int {
    t:=0
    arr:=[]int{}
    ans:=[]int{}
    for i:=0; i < len(words); i++ {
        val, err := strconv.Atoi(words[i])

        if (err == nil) {
            arr = append(arr, val)
            t = len(arr)
        } else {
            t--
            if (t >= 0) {
                ans = append(ans, arr[t])
            } else {
                ans = append(ans, -1)
            }
        }
    }

    return ans
}