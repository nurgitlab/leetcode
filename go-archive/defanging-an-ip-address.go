func defangIPaddr(address string) string {
    arr:=strings.Split(address, ".")

    return strings.Join(arr[:], "[.]")
}