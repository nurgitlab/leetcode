func decodeMessage(key string, message string) string {
    set:=map[byte]byte{}
    key=strings.ReplaceAll(key, " ", "")
    j:=0
    for i:=0; i < len(key); i++ {
        if _, ok := set[key[i]]; ok {continue}
        set[key[i]] = byte(j + 97)
        j++
    }

    ans:=""

    for i:=0; i < len(message); i++ {
        if _, has:=set[message[i]]; has {
            ans+=string(set[message[i]])
        } else {
            ans+=" "
        }
    }

    return ans
}