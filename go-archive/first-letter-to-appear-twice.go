func repeatedCharacter(s string) byte {
    mem := map[byte]bool{}

    for i:=0; i < len(s); i++ {
        if _, isHas := mem[s[i]]; isHas {
            return s[i]
        } else {mem[s[i]] = true}
    }

    return 'a'
}