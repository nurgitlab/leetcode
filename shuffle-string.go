func restoreString(s string, indices []int) string {
    arr:=make([]string, len(s))

    for i:=0; i < len(s); i++ {
        arr[indices[i]] = string(s[i])
    }

    return strings.Join(arr, "")
}