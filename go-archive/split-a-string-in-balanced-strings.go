func balancedStringSplit(s string) int {
    arr := strings.Split(s, ""); ans:=0; b:=0;
    for i:=0; i < len(arr); i++ {
        if arr[i] == "R" {b++} else {b--}
        if b == 0 {ans++}
    }

    return ans
}