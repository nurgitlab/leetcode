func isPrefixString(s string, words []string) bool {
    mem:=""
    for i:=0; i < len(words); i++ {
        mem+=words[i]
        if (mem == s) {return true}
    }

    return false
}