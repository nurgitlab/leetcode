func findMinimumOperations(s1 string, s2 string, s3 string) int {
    minLen:=int(^uint(0) >> 1)

    if (minLen > len(s1)) {minLen = len(s1)}
    if (minLen > len(s2)) {minLen = len(s2)}
    if (minLen > len(s3)) {minLen = len(s3)}

    a1:= s1[0:minLen]
    a2:= s2[0:minLen]
    a3:= s3[0:minLen]

    if (a1[0] == a2[0] && a2[0] == a3[0] && a3[0] == a1[0]) {
        for i:=1; i < minLen; i++ {
            if (a1[i] == a2[i] && a1[i] == a3[i] && a2[i] == a3[i]) {
                continue
            } else {
                return len(s1) + len(s2) + len(s3) - 3 * i
            }
        }

        return len(s1) + len(s2) + len(s3) - 3 * minLen
    }

    return -1
}