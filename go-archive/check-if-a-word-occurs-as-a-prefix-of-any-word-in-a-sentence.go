func isPrefixOfWord(sentence string, searchWord string) int {
    s:=strings.Split(sentence, " ")

    for i, v:= range s {
        if len(v) < len(searchWord) {continue}

        if searchWord == v[0:len(searchWord)] {return i + 1}
    }

    return -1
}