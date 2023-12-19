func secondHighest(s string) int {
    mem:=map[int]bool{}

    for i:=0; i < len(s); i++ {
        if v, err := strconv.Atoi(string(s[i])); err == nil {
            mem[v]=true
        }
    }

    arr:=[]int{}

    for k, _:= range mem {arr = append(arr, k)}

    sort.SliceStable(arr, func (i int, j int)bool {
        return arr[i] > arr[j]
    })

    if len(arr) < 2 {return -1}

    return arr[1]
}