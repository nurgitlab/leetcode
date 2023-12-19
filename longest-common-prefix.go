func longestCommonPrefix(strs []string) string {
    ans:=""; min:=len(strs[0])

    for _, s:=range strs {
        if (len(s) < min) {min = len(s)}
    }

    for i:=0; i < min; i++ {
        f:=strs[0][i]; isOk := true
        for k:=1; k < len(strs); k++ {
            if (strs[k][i] != f) {
                isOk = false
                break
            }
        }

        if (isOk) {
            ans+=string(f)
        } else {
            return ans
        }
    }

    return ans
}