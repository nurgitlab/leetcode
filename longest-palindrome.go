func longestPalindrome(s string) int {
    mem:=map[byte]int{}

    for i:=0; i < len(s); i++ {
        if _, isHas := mem[s[i]]; isHas {
            mem[s[i]]++
        } else {
            mem[s[i]] = 1
        }
    }

    max:=0; ans:=0

    for _, v := range mem {
        if (v % 2 == 0) {ans+=v}
        if (v % 2 == 1 && v > max) {
            max = 1
            ans+=v-1
        }
    }

    return ans + max
}