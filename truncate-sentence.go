func truncateSentence(s string, k int) string {
    str:= strings.Split(s, " ")

    return strings.Join(str[:k], " ")
}