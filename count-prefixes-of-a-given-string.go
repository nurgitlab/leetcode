func countPrefixes(words []string, s string) int {
    ans :=0

    for _, word := range words {
        if (len(word) > len(s)) {continue}
        isOk:=true
        for i:=0; i < len(word); i++ {
            if (word[i] != s[i]) {
                isOk = false
                break
            }
        }
        if isOk {ans++}
    }

    return ans
}