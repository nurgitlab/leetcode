func minPartitions(n string) int {
    arr:=strings.Split(n, ""); ans:=0

    for i:=0; i < len(arr); i++ {
        j, err := strconv.Atoi(arr[i])
        if (err != nil) {
            fmt.Println("Not current type")
        }
        if (j > ans) {ans = j}
    }
    return ans
}