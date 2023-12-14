func sortVowels(s string) string {
    r:=[]rune(s); mem:=[]rune{}

    for i:=0; i < len(r); i++ {
        if isVowel(r[i]) {
            mem = append(mem, r[i])
            r[i] = '_'
        }
    }
    sort.Slice(mem, func(i, j int) bool {
        return mem[i] < mem[j]
    })
    fmt.Println(mem)

    j:=0

    for i:=0; i < len(r); i++ {
        if r[i] == '_' {
            r[i] = mem[j]
            j++
        }
    }
    return string(r)
}

func isVowel (b rune) bool {
    vowels:="aeiouAEIOU"
    return strings.ContainsRune(vowels, b)
}