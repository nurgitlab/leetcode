func canBeTypedWords(text string, brokenLetters string) int {
    broken := map[byte]bool{}

    for i, _ := range brokenLetters {
        broken[brokenLetters[i]] = true
    }

    splitted := strings.Split(text, " "); ans:=0
    for _, word := range splitted {
        isOk:=true
        for i:=0; i < len(word); i++ {
            if _, isHas := broken[word[i]]; isHas {
                isOk = false
            }
        }
        if isOk {ans++}
    }

    return ans
}