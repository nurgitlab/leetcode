func lengthOfLastWord(s string) int {
    spl:= strings.Split(s, " ")
    ans:=0
    for i:=0; i < len(spl); i++ {
        if len(spl[i]) > 0 {
            ans = len(spl[i])
        }
    }

    return ans
}