func numberOfPairs(nums []int) []int {
    mem:=map[int]int{}

    for _, v := range nums {
        if _, isHas := mem[v]; isHas {
            mem[v]++
        } else {mem[v] = 1}
    }

    pairs:=0; unpaired:=0;

    for _, v:= range mem {
        if v % 2 == 0 {pairs+=v/2} else {
            unpaired++
            pairs+=(v-1)/2
        }
    }

    return []int{pairs, unpaired}
}