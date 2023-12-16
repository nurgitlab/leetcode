func destCity(paths [][]string) string {
    mem:=map[string]string{}

    for _, k := range paths {
        mem[k[0]] = k[1]
    }

    return rec(paths[0][0], mem)
}

func rec(from string, mem map[string]string) string {
    if _, isHas := mem[from]; !isHas {return from}

    return rec(mem[from], mem)
}
