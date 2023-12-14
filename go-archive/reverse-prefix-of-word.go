func reversePrefix(word string, ch byte) string {
    reverseTo:=0
    for i:=0; i < len(word); i++ {
        if word[i] == ch {
            reverseTo = i
            break
        }
    }

    return rev(word[:reverseTo + 1]) + word[reverseTo + 1:]
}

func rev(str string) string {
    fmt.Println(str)
    ans:=""

    for i:=len(str) - 1; i>=0; i-- {
        ans+=string(str[i])
    }

    return ans
}