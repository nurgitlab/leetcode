func largestAltitude(gain []int) int {
    alt:=0; ans:=0

    for _, v:= range gain {
        alt+=v
        if (alt > ans) {ans = alt}
    }

    return ans
}