func mostWordsFound(sentences []string) int {
    ans:=0

    for i:=0; i<len(sentences); i++ {
        k:=1
        for j:=0; j<len(sentences[i]); j++ {
            if (sentences[i][j] == ' ') {k++}
        }
        if (ans < k) {ans = k}
    }

    return ans
}