func splitWordsBySeparator(words []string, separator byte) []string {
    joined:= strings.Join(words, string(separator))
    splitted:=strings.Split(joined, string(separator))
    ans:=[]string{}

    for _, s:=range splitted {
        if (len(s) > 0) {
            ans = append(ans, s)
        }
    }

    return ans
}