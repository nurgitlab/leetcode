func countMatches(items [][]string, ruleKey string, ruleValue string) int {
    ans:=0; val:=0
    if (ruleKey == "color") {val = 1} else if ruleKey == "name" {val = 2}
    for i:=0; i < len(items); i++ {
        if items[i][val] == ruleValue {ans++}
    }

    return ans
}