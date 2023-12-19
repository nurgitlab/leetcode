func maximumTime(time string) string {
    ans:=""
    for i, v := range time {
        if (v != '?') {
            ans+=string(v)
            continue
        }

        if i == 0 {
            if (
                time[1] == '0' ||
                time[1] == '1' ||
                time[1] == '2' ||
                time[1] == '3' ||
                time[1] == '?') {
                ans+="2"
            } else {ans+="1"}
        }

        if i == 1 {
            if (ans[0] == '1' || ans[0] == '0') {
                ans+="9"
            } else {ans+="3"}
        }

        if i == 3 {ans+="5"}
        if i == 4 {ans+="9"}
    }

    return ans
}