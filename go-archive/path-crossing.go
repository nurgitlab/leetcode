func isPathCrossing(path string) bool {
    x:=0; y:=0; mem:=map[string]bool{"0-0": true}

    for i:=0; i < len(path); i++ {
        if path[i] == 'N' {x++}
        if path[i] == 'S' {x--}
        if path[i] == 'W' {y++}
        if path[i] == 'E' {y--}

        k:=strconv.Itoa(x) + "-" + strconv.Itoa(y)
        if _, isHas := mem[k]; isHas {
            return true
        } else {
            mem[k] = true
        }
    }

    return false
}