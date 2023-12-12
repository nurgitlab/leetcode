func numOfStrings(patterns []string, word string) int {
    ans:=0

    for i:=0; i < len(patterns); i++ {
        spl:= strings.Join(strings.Split(word, patterns[i]), "")

        if (len(spl) != len(word)) {ans++}
    }

    return ans
}