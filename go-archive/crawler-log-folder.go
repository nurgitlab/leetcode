func minOperations(logs []string) int {
    ans:=0

    for i:=0; i < len(logs); i++ {
        if (logs[i] == "../") {
            ans--
            if (ans < 0) {ans = 0}
        } else if (logs[i] == "./") {
            continue
        } else {
            ans++
        }
    }

    return ans
}