func firstPalindrome(words []string) string {
    for _, v:= range words {
        if (isPalindromic(v)) {return v}
    }

    return ""
}

func isPalindromic (word string) bool {
    for i:=0; i < len(word); i++ {
        if (word[i] != word[len(word) - 1 - i]) {return false}
    }

    return true
}