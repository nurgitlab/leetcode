func minimizedStringLength(s string) int {
    ans:=map[byte]bool{}

    for i:=0; i < len(s); i++ {
        ans[s[i]] = true
    }

    return len(ans)
}