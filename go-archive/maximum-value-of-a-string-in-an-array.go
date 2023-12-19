func maximumValue(strs []string) int {
    ans:=0

    for _, v:=range strs{
        val, err:= strconv.Atoi(v)

        if (err == nil) {
            if (val > ans) {ans = val}
        } else {
            if (len(v) > ans) {ans = len(v)}
        }
    }

    return ans
}