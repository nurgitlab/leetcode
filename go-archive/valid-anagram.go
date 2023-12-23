func isAnagram(s string, t string) bool {
    s1:=toObj(s); t1:= toObj(t)

    for k, v := range s1 {
        if n, isHas := t1[k]; isHas {
            if (n != v) {return false}
        } else {
            return false
        }
    }

    for k, v := range t1 {
        if n, isHas := s1[k]; isHas {
            if (n != v) {return false}
        } else {
            return false
        }
    }

    return true
}

func toObj (s string) map[byte]int {
    mem:=map[byte]int{}

    for i:=0; i < len(s); i++ {
        if _, isHas := mem[s[i]]; isHas {
            mem[s[i]]++
        } else {
            mem[s[i]] = 1
        }
    }

    return mem
}