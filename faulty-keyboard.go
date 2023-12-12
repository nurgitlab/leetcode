func finalString(s string) string {
    ans:=""

    for i:=0; i < len(s); i++ {
        if (s[i] == 'i') {
            ans=reverse(ans)
        } else {
            ans+=string(s[i])
        }
    }

    return ans
}

func reverse(str string) string {
    r:= []rune(str)
    for i:=0; i < len(r)/2; i++{
        mem:=r[i]
        r[i] = r[len(r) - 1 - i]
        r[len(r) - 1 - i] = mem
    }

    return string(r)
}