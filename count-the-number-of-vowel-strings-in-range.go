func vowelStrings(words []string, left int, right int) int {
    ans:=0
    set:=map[byte]bool{
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    }

    for i:=left; i <= right; i++ {
        word:=words[i]

        if (set[word[0]] && set[word[len(word) - 1]]) {ans++}
    }

    return ans
}