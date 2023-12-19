func reverseVowels(s string) string {
    mem:=map[byte]bool{
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
        'A': true,
        'E': true,
        'I': true,
        'O': true,
        'U': true,
    }

    v:=""; j:=0; ans:=""

    for i:=0; i < len(s); i++ {
        if _, isHas := mem[s[i]]; isHas {
            v+=string(s[i])
        }
    }

    v = rev(v)

    for i:=0; i < len(s); i++ {
        if _, isHas := mem[s[i]]; isHas {
            ans+=string(v[j])
            j++
        } else {
            ans+=string(s[i])
        }
    }

    return ans
}

func rev (s string) string {
    ans:=""

    for i:=len(s) - 1; i>=0; i-- {
        ans+=string(s[i])
    }

    return ans
}