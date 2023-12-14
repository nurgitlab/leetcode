func countConsistentStrings(allowed string, words []string) int {
    ans:=0

    mem:=map[byte]bool{}

    for i:=0; i <len(allowed); i++ {
        mem[allowed[i]] = true
    }

    for i:=0; i < len(words); i++ {
        m:=map[byte]bool{}

        for j:=0; j < len(words[i]); j++ {
            m[words[i][j]] = true
        }

        isOk:=true
        for k:= range m {
            if (!mem[k]) {isOk = false}
        }

        if isOk {ans++}
    }

    return ans
}