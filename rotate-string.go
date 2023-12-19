func rotateString(s string, goal string) bool {
    if s == goal {return true}
    s = s + s
    if len(goal) == len(strings.Join(strings.Split(s, goal),"")) {return true}

    return false
}