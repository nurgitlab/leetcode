func cellsInRange(s string) []string {
    a, _ := strconv.Atoi(string(s[1]))
    b, _ := strconv.Atoi(string(s[4]))
    c := int(s[0]); d:=int(s[3]); ans:=[]string{}

    for i:=c; i<=d; i++ {
        for j:=a; j<=b; j++ {
            ans = append(ans, string(i) + strconv.Itoa(j))
        }
    }

    return ans
}