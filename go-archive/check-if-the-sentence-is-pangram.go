func checkIfPangram(sentence string) bool {
    obj:=map[byte]bool{}

    for i:=0; i < len(sentence); i++ {
        obj[sentence[i]] = true
    }

    for i:=0; i<26; i++ {
        if _, has:= obj[byte(i + 97)]; !has {return false}
    }

    return true
}