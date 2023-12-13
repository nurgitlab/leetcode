func numJewelsInStones(jewels string, stones string) int {
    set:=make(map[byte]bool); ans:=0

    for i:=0; i < len(jewels); i++ {
        set[jewels[i]] = true
    }

    for i:=0; i < len(stones); i++ {
        if set[stones[i]] {ans++}
    }
    return ans
}