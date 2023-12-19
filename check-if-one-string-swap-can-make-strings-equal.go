func areAlmostEqual(s1 string, s2 string) bool {
    if (len(s1) != len(s2)) {return false}

    dif:=0;k1:="";k2:=""
    for i:=0; i < len(s1); i++ {
        if s1[i] != s2[i] {
            dif++
            k1+=string(s1[i])
            k2 = string(s2[i]) + k2
        }
    }

    if (dif == 0 || (dif == 2 && k1 == k2)) {return true}
    return false
}
