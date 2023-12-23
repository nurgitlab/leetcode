func divideArray(nums []int) bool {
    mem:=map[int]int{}

    for i:=0; i < len(nums); i++ {
        if _, isHas := mem[nums[i]]; isHas {
            mem[nums[i]]++
        } else {
            mem[nums[i]] = 1
        }
    }

    for _, v := range mem {
        if (v % 2 == 1) {return false}
    }

    return true
}