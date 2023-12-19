func wordPattern(pattern string, s string) bool {
    spl:= strings.Split(s, " ")
    p:=map[byte]string{}; r:=map[string]byte{}
    if (len(spl) != len(pattern)) {return false}
    for i:=0; i < len(pattern); i++ {
        if _, isHas:= p[pattern[i]]; isHas {
            if (p[pattern[i]] != spl[i]) {
                return false
            }
        } else {
            p[pattern[i]] = spl[i]
        }

        if _, isHas:= r[spl[i]]; isHas {
            if (r[spl[i]] != pattern[i]) {
                return false
            }
        } else {
            r[spl[i]] = pattern[i]
        }
    }

    return true
}