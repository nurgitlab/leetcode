func makeSmallestPalindrome(s string) string {
    r:=[]rune(s)

    for i:=0; i <len(r) / 2; i++ {
        if int(r[i]) > int(r[len(r) - 1 - i]) {
            r[i] = r[len(r) - 1 - i]
        } else {
            r[len(r) - 1 - i] = r[i]
        }
    }

    return string(r)
}