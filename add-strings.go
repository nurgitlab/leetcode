func addStrings(num1 string, num2 string) string {
    for len(num1) < len(num2) {num1 = "0" + num1}
    for len(num2) < len(num1) {num2 = "0" + num2}

    num1 = rev(num1); num2 = rev(num2); ans:=""; rem:=0

    for i:=0; i < len(num1); i++ {
        n1, _ := strconv.Atoi(string(num1[i]))
        n2, _ := strconv.Atoi(string(num2[i]))
        sum:=rem + n1 + n2
        if (sum > 9) {
            rem = 1
            sum%=10
        } else {
            rem = 0
        }

        ans+=strconv.Itoa(sum)
    }

    if (rem == 1) {ans+="1"}

    return rev(ans)
}

func rev(s string) string {
    ans:=""
    for i:=len(s) - 1; i>=0; i-- {
        ans+=string(s[i])
    }

    return ans
}