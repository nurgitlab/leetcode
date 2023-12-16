func lemonadeChange(bills []int) bool {
    mem:=map[int]int{
        5: 0,
        10: 0,
    }

    for i:=0; i < len(bills); i++ {
        if (bills[i] == 5) {
            mem[bills[i]]++
            continue
        }

        if (bills[i] == 10) {
            if mem[5] == 0 {
                return false
            } else {
                mem[10]++
                mem[5]--
            }
        }

        if (bills[i] == 20) {
            if (mem[10] > 0 && mem[5] > 0) {
                mem[10]--
                mem[5]--
            } else if (mem[5] > 2) {
                mem[5]-=3
            } else {return false}
        }
    }

    return true
}