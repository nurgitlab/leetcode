func uniqueOccurrences(arr []int) bool {
    mem := map[int]int{}

    for i:=0; i < len(arr); i++ {
        if _, ishas := mem[arr[i]]; ishas {
            mem[arr[i]]++
        } else {
            mem[arr[i]] = 1
        }
    }

    c:=map[int]bool{}

    for _, v := range mem {
        if _, ishas := c[v]; ishas {
            return false
        } else {
            c[v] = true
        }
    }

    return true
}