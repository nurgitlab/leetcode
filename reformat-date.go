func reformatDate(date string) string {
    s:= strings.Split(date, " ")
    d:=s[0]; m:=s[1]; y:=s[2];

    mtn:=map[string]string{
        "Jan":"01",
        "Feb":"02",
        "Mar":"03",
        "Apr":"04",
        "May":"05",
        "Jun":"06",
        "Jul":"07",
        "Aug":"08",
        "Sep":"09",
        "Oct":"10",
        "Nov":"11",
        "Dec":"12",
    }
    d = day(d)
    y+="-" + mtn[m] + "-" + d

    return y
}

func day (d string) string {
    ans:=""

    for i:=0; i < len(d); i++ {
        if v, err := strconv.Atoi(string(d[i])); err == nil {
            ans+=strconv.Itoa(v)
        }
    }

    if (len(ans) < 2) {ans = "0" + ans}
    return ans
}