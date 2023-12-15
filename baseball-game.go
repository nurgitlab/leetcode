func calPoints(operations []string) int {
    arr:=[]int{}; ans:=0
    fmt.Println(operations)
    for _, v := range operations {
        if num, err:= strconv.Atoi(string(v)); err == nil {
            arr = append(arr, num)
        } else {
            if (v == "C") {
                arr=arr[0:len(arr) - 1]
            } else if (v == "D") {
                arr = append(arr, arr[len(arr) - 1] * 2)
            } else {
                arr = append(arr, arr[len(arr) - 1] + arr[len(arr) - 2] )
            }
        }
    }
    for i:=0; i < len(arr); i++ {
        ans+=arr[i]
    }

    return ans
}