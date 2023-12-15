func countSeniors(details []string) int {
    ans:=0

    for i:=0; i < len(details);i++ {
        num, _:=strconv.Atoi(string(details[i][11]) + string(details[i][12]))
        if (num > 60) {ans++}
    }

    return ans
}