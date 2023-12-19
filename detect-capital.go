func detectCapitalUse(word string) bool {
    if word == strings.ToUpper(word) {return true}
    if word[1:len(word)] == strings.ToLower(word[1:len(word)]) {return true}

    return false
}