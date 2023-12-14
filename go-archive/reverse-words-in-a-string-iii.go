func reverseWords(s string) string {
    arr:= strings.Split(s, " ")

    for i:=0; i < len(arr); i++ {
        r:= []rune(arr[i])
        for j:=0; j < len(r)/2; j++ {
            mem:=r[j]
            r[j]=r[len(r) - 1 - j]
            r[len(r) - 1 - j]=mem
        }
        arr[i]=string(r)
    }

    return strings.Join(arr, " ")
}